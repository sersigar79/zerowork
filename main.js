let archivos = [];
let albumes = {};
let albumActual = null;
let slideshowInterval = null;
let slideshowIndex = 0;
let modoBW = false;

const dropzone = document.getElementById('dropzone');
const gallery = document.getElementById('gallery');
const albumSelect = document.getElementById('albumSelect');
const albumInfo = document.getElementById('albumInfo');
const albumsList = document.getElementById('albumsList');
const bgMusic = document.getElementById('bgMusic');

let chart = null;

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

function handleFiles(fileList) {
  const nuevos = Array.from(fileList).map((file) => ({
    file,
    name: file.name,
    type: file.type.startsWith('image') ? 'image' : 'video',
    size: file.size,
    lastModified: file.lastModified,
    date: new Date(file.lastModified),
    album: null
  }));

  archivos = archivos.concat(nuevos);
  if (!albumActual) {
    crearAlbum('General');
  }
  asignarArchivosAlbum(albumActual || 'General', nuevos);
  renderAlbumsList();
  renderGallery();
}

function crearAlbum(nombre) {
  if (!nombre) {
    nombre = prompt('Nombre del nuevo álbum (ej. Viaje a Bali, Verano 2024):');
    if (!nombre) return;
  }
  if (!albumes[nombre]) {
    albumes[nombre] = [];
    const option = document.createElement('option');
    option.value = nombre;
    option.textContent = nombre;
    albumSelect.appendChild(option);
  }
  albumActual = nombre;
  albumSelect.value = nombre;
  albumInfo.textContent = `Álbum: ${nombre}`;
  renderGallery();
}

function asignarArchivosAlbum(nombreAlbum, listaArchivos) {
  if (!albumes[nombreAlbum]) albumes[nombreAlbum] = [];
  listaArchivos.forEach((a) => {
    a.album = nombreAlbum;
    albumes[nombreAlbum].push(a);
  });
}

function seleccionarAlbum(nombre) {
  albumActual = nombre || null;
  if (!albumActual) {
    gallery.innerHTML = '';
    albumInfo.textContent = 'Selecciona un álbum para ver sus fotos y vídeos.';
    return;
  }
  albumInfo.textContent = `Álbum: ${albumActual}`;
  renderGallery();
}

function renderGallery() {
  gallery.innerHTML = '';
  if (!albumActual || !albumes[albumActual]) return;

  const lista = albumes[albumActual];
  lista.sort((a, b) => a.date - b.date);

  lista.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.index = index;

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(item.file);
      div.appendChild(img);
    } else {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(item.file);
      video.controls = true;
      div.appendChild(video);
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${item.name} · ${item.date.toLocaleDateString()}`;
    div.appendChild(meta);

    gallery.appendChild(div);
  });

  aplicarModoBW();
  actualizarGrafica();
}

function renderAlbumsList() {
  albumsList.innerHTML = '';
  const nombres = Object.keys(albumes);
  if (!nombres.length) {
    albumsList.textContent = 'Aún no has creado álbumes. Sube archivos y crea uno.';
    return;
  }

  nombres.forEach((nombre) => {
    const lista = albumes[nombre];
    const fechas = lista.map((a) => a.date).sort((a, b) => a - b);
    const inicio = fechas[0];
    const fin = fechas[fechas.length - 1];

    const p = document.createElement('p');
    p.textContent = `${nombre}: ${lista.length} archivos · ${inicio.toLocaleDateString()} – ${fin.toLocaleDateString()}`;
    albumsList.appendChild(p);
  });
}

function toggleSlideshow() {
  if (!albumActual || !albumes[albumActual] || !albumes[albumActual].length) return;

  const items = gallery.querySelectorAll('.gallery-item');
  if (!items.length) return;

  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    gallery.classList.remove('slideshow-active');
    items.forEach((item) => item.classList.remove('active'));
    return;
  }

  gallery.classList.add('slideshow-active');
  slideshowIndex = 0;
  items.forEach((item) => item.classList.remove('active'));
  items[slideshowIndex].classList.add('active');

  slideshowInterval = setInterval(() => {
    items[slideshowIndex].classList.remove('active');
    slideshowIndex = (slideshowIndex + 1) % items.length;
    items[slideshowIndex].classList.add('active');
  }, 3000);
}

function toggleBW() {
  modoBW = !modoBW;
  aplicarModoBW();
}

function aplicarModoBW() {
  if (modoBW) {
    gallery.classList.add('bw');
  } else {
    gallery.classList.remove('bw');
  }
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

function descargarAlbum() {
  if (!albumActual || !albumes[albumActual] || !albumes[albumActual].length) return;
  alert(
    'Aquí podrías descargar el álbum como ZIP. Para hacerlo real necesitarías un backend o una librería de compresión en el navegador.'
  );
}

/* Gráfica simple: número de archivos por fecha del álbum actual */
function actualizarGrafica() {
  const canvas = document.getElementById('grafica');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (chart) chart.destroy();

  if (!albumActual || !albumes[albumActual] || !albumes[albumActual].length) {
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: []
      }
    });
    return;
  }

  const lista = albumes[albumActual];
  const porFecha = {};

  lista.forEach((item) => {
    const key = item.date.toLocaleDateString();
    porFecha[key] = (porFecha[key] || 0) + 1;
  });

  const labels = Object.keys(porFecha);
  const data = labels.map((l) => porFecha[l]);

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Fotos/Vídeos por día',
          data,
          backgroundColor: 'rgba(250, 204, 21, 0.6)',
          borderColor: '#facc15',
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        legend: { labels: { color: '#e2e8f0' } }
      },
      scales: {
        x: {
          ticks: { color: '#e2e8f0' },
          grid: { color: '#1e293b' }
        },
        y: {
          ticks: { color: '#e2e8f0' },
          grid: { color: '#1e293b' }
        }
      }
    }
  });
}
