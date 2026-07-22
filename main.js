/* ===================== i18n ===================== */
const STRINGS = {
  en: {
    nav_wealth:'Wealth', nav_goal:'Your goal', nav_windfall:'Windfall',
    hero_eyebrow:'🌍 Early retirement calculator',
    hero_title1:'When can you', hero_title_em:'stop', hero_title2:'working?',
    hero_sub:'Plug in your numbers and find out at what age your savings can support you — works for any country.',
    hero_legal:'General FIRE math, not tied to any specific country\'s tax or pension system.',
    legal_link:'legal notice',
    lang_switch:'Español',
    w_title:'Your wealth', w_age_now:'Your current age', w_age_retire:'Age you want to retire',
    w_current:'Savings & investments you already have', w_contribution:'How much you save or invest per month',
    w_return:'Expected annual return', w_inflation:'Expected inflation',
    w_result_prefix:'By age', w_result_mid:', you\'d have approximately', w_result_note:'At this rate, you\'ll have contributed your own money for', w_result_note2:'years — the rest is compound growth.',
    g_badge_prefix:'By age', g_badge_you_have:'you\'d have',
    g_forever:'To last forever (4% rule)', g_until:'To last until a chosen age',
    g_end_age_label:'If you plan to spend it down, until what age?',
    g_status_good:'On track', g_status_bad:'Not there yet',
    g_chart_title:'Your wealth vs. what you need',
    g_legend_wealth:'Your wealth', g_legend_goal:'What you need to last forever',
    g_spend_title:'Monthly spending & other income', g_spend:'Monthly spending you want to cover in retirement',
    g_toggle_income:'Count other retirement income (pension, rental, etc.)',
    g_toggle_income_hint:'If off, we assume you live only off your own savings',
    g_income:'Other monthly income once retired',
    g_how_title:'How to get there', g_how_short:'Four alternative ways to close the gap. You don\'t need to do all of them.',
    g_how_save:'Save this much more per month', g_how_return:'Or raise your return to', g_how_spend:'Or cut your monthly spending to', g_how_age:'Or delay retirement to',
    g_how_unrealistic:'not realistic', g_how_toofar:'too far out', g_how_never:'not enough',
    g_already_prefix:'You already have enough capital by age', g_already_suffix:'. In fact, you could consider retiring as early as age',
    wf_title:'Did a windfall land in your lap?',
    wf_desc:'Lottery, inheritance, a settlement... enter the amount and how much you want to spend per month. We\'ll tell you how long it lasts.',
    wf_age:'Your current age', wf_amount:'Lump sum received', wf_spending:'Monthly spending you want to keep',
    wf_return:'Expected annual return if invested', wf_return_hint:'0% if you just leave it in a bank account',
    wf_inflation:'Expected inflation', wf_maxage:'Age you want to check up to',
    wf_result_title:'Result', wf_runs_out:'Runs out at age', wf_lasts:'Doesn\'t run out before age',
    wf_years_left:'Years it lasts', wf_forever_capital:'Capital needed to last "forever"',
    wf_note_bad:'With these assumptions, your capital won\'t cover this spending level for your whole life expectancy. Try lowering monthly spending, seeking a higher return, or counting on a pension or other income to help.',
    wf_note_good:'With these assumptions, the money lasts at least until age',
    faq_title:'Frequently asked questions', faq_sub:'The questions we get most about early retirement and the 4% rule.',
    faq_q1:'What is the 4% rule?', faq_a1:'It comes from the Trinity Study: if you withdraw 4% of your portfolio\'s value per year (adjusted for inflation), in most historical scenarios your money lasts at least 30 years without running out — often growing instead. That\'s where the "25x annual spending" target comes from (1 ÷ 0.04 = 25).',
    faq_q2:'Does this account for taxes?', faq_a2:'No — tax rules on investment gains and retirement income vary hugely by country, so this tool intentionally stays tax-agnostic. Adjust your spending target upward if you expect meaningful taxes on withdrawals where you live.',
    faq_q3:'What if I have a state pension?', faq_a3:'Turn on "count other retirement income" and enter your best estimate. This tool can\'t calculate your specific country\'s pension rules — for that, check your national pension authority\'s own simulator.',
    faq_q4:'Is this calculator accurate?', faq_a4:'It\'s a simplified, educational estimate based on assumptions you provide — not financial advice, and not a substitute for a professional planner familiar with your country\'s tax and retirement system.',
    links_title:'Useful resources', links_sub:'A few solid, independent places to go deeper — this tool is a starting point, not the finish line.',
    disclaimer_title:'Legal notice',
    disclaimer_body:'This tool is for informational and educational purposes only. It is not financial, tax, or legal advice, and it is not tied to any specific country\'s laws, tax code, or pension system. Results are estimates based on simplified assumptions you provide and may differ substantially from your real situation. Always verify with a licensed financial advisor in your country before making retirement decisions. Use of this site implies acceptance of these terms.',
    footer_note:'General model, not official in any jurisdiction. All calculations run in your browser — nothing you enter is sent or stored anywhere.',
  },
  es: {
    nav_wealth:'Patrimonio', nav_goal:'Tu objetivo', nav_windfall:'Lotería o herencia',
    hero_eyebrow:'🌍 Calculadora de jubilación anticipada',
    hero_title1:'¿Cuándo puedes', hero_title_em:'parar', hero_title2:'de trabajar?',
    hero_sub:'Mete tus números y descubre a qué edad tus ahorros te pueden sostener — válido para cualquier país.',
    hero_legal:'Matemática FIRE general, no ligada al sistema fiscal ni de pensiones de ningún país concreto.',
    legal_link:'aviso legal',
    lang_switch:'English',
    w_title:'Tu patrimonio', w_age_now:'Tu edad actual', w_age_retire:'Edad a la que te quieres jubilar',
    w_current:'Ahorros e inversiones que ya tienes', w_contribution:'Cuánto ahorras o inviertes al mes',
    w_return:'Rentabilidad anual esperada', w_inflation:'Inflación esperada',
    w_result_prefix:'A los', w_result_mid:'años tendrías aproximadamente', w_result_note:'A este ritmo, habrás aportado tu propio dinero durante', w_result_note2:'años — el resto es crecimiento por interés compuesto.',
    g_badge_prefix:'A los', g_badge_you_have:'años tendrías',
    g_forever:'Para que dure para siempre (regla del 4%)', g_until:'Para que dure hasta una edad concreta',
    g_end_age_label:'Si piensas gastarlo poco a poco, ¿hasta qué edad?',
    g_status_good:'Vas bien encaminado', g_status_bad:'Aún te falta capital',
    g_chart_title:'Tu patrimonio frente a lo que necesitas',
    g_legend_wealth:'Tu patrimonio', g_legend_goal:'Lo que necesitas para que dure siempre',
    g_spend_title:'Gasto mensual y otros ingresos', g_spend:'Gasto mensual que quieres cubrir jubilado',
    g_toggle_income:'Contar otros ingresos en la jubilación (pensión, alquiler, etc.)',
    g_toggle_income_hint:'Si lo desactivas, asumimos que vives solo de tus ahorros',
    g_income:'Otros ingresos mensuales una vez jubilado',
    g_how_title:'Cómo alcanzarlo', g_how_short:'Cuatro formas alternativas de cerrar el hueco. No hace falta hacerlas todas.',
    g_how_save:'Ahorra esto de más cada mes', g_how_return:'O sube tu rentabilidad a', g_how_spend:'O baja tu gasto mensual a', g_how_age:'O retrasa tu jubilación hasta',
    g_how_unrealistic:'no es realista', g_how_toofar:'muy lejos', g_how_never:'no alcanza',
    g_already_prefix:'Ya tienes capital suficiente a los', g_already_suffix:'años. De hecho, podrías plantearte jubilarte desde los',
    wf_title:'¿Te ha tocado un pellizco de golpe?',
    wf_desc:'Lotería, herencia, indemnización... mete la cantidad y cuánto quieres gastar al mes. Te decimos hasta qué edad te dura.',
    wf_age:'Tu edad actual', wf_amount:'Capital recibido de golpe', wf_spending:'Gasto mensual que quieres mantener',
    wf_return:'Rentabilidad esperada si lo inviertes', wf_return_hint:'0% si lo dejas en una cuenta sin invertir',
    wf_inflation:'Inflación estimada', wf_maxage:'Edad hasta la que quieres comprobar',
    wf_result_title:'Resultado', wf_runs_out:'Se agota a los', wf_lasts:'No se agota antes de los',
    wf_years_left:'Años que dura', wf_forever_capital:'Capital para que dure "para siempre"',
    wf_note_bad:'Con estos supuestos, tu capital no llega a cubrir este gasto durante toda tu esperanza de vida. Baja el gasto mensual, busca más rentabilidad, o cuenta con una pensión u otro ingreso que lo complemente.',
    wf_note_good:'Con estos supuestos, el dinero te dura al menos hasta los',
    faq_title:'Preguntas frecuentes', faq_sub:'Lo que más nos preguntáis sobre jubilación anticipada y la regla del 4%.',
    faq_q1:'¿Qué es la regla del 4%?', faq_a1:'Viene del Trinity Study: si retiras el 4% del valor de tu cartera al año (ajustado a inflación), en la mayoría de escenarios históricos el dinero dura al menos 30 años sin agotarse — a menudo incluso crece. De ahí sale el objetivo de "25x tu gasto anual" (1 ÷ 0,04 = 25).',
    faq_q2:'¿Tiene en cuenta los impuestos?', faq_a2:'No — la fiscalidad sobre inversiones y jubilación varía muchísimo entre países, así que esta herramienta se mantiene deliberadamente neutral en ese aspecto. Ajusta tu objetivo de gasto al alza si esperas pagar impuestos importantes donde vivas.',
    faq_q3:'¿Y si tengo una pensión pública?', faq_a3:'Activa "contar otros ingresos" e introduce tu mejor estimación. Esta herramienta no puede calcular las reglas concretas de pensión de tu país — para eso, consulta el simulador oficial de tu organismo de pensiones nacional.',
    faq_q4:'¿Es fiable esta calculadora?', faq_a4:'Es una estimación simplificada y educativa basada en los supuestos que tú introduces — no es asesoramiento financiero, ni sustituye a un planificador profesional que conozca el sistema fiscal y de pensiones de tu país.',
    links_title:'Recursos útiles', links_sub:'Algunos sitios independientes y solventes para profundizar — esta herramienta es un punto de partida, no el destino final.',
    disclaimer_title:'Aviso legal',
    disclaimer_body:'Esta herramienta es meramente informativa y educativa. No constituye asesoramiento financiero, fiscal ni jurídico, y no está ligada a la legislación, fiscalidad ni sistema de pensiones de ningún país concreto. Los resultados son estimaciones basadas en supuestos simplificados que tú introduces y pueden diferir sustancialmente de tu situación real. Verifica siempre con un asesor financiero colegiado en tu país antes de tomar decisiones sobre tu jubilación. El uso de esta web implica la aceptación de estas condiciones.',
    footer_note:'Modelo general, sin validez oficial en ninguna jurisdicción. Todos los cálculos se hacen en tu navegador — no se envía ni se guarda nada de lo que introduces.',
  },
};
function t(key){ return (STRINGS[S.lang] && STRINGS[S.lang][key]) || STRINGS.en[key] || key; }

const fmtMoney = n => new Intl.NumberFormat(S.lang==='es'?'es-ES':'en-US',{maximumFractionDigits:0}).format(Math.round(n));
const fmt1 = n => new Intl.NumberFormat(S.lang==='es'?'es-ES':'en-US',{maximumFractionDigits:1}).format(n);

/* ===================== State ===================== */
const S = {
  lang:'en',
  ageNow:35, ageRetire:50,
  currentWealth:50000, monthlyContribution:1000,
  monthlySpending:2000,
  countOtherIncome:false, otherIncomeMonthly:0,
  returnRate:7, inflation:3, endAge:90,
  wfAgeNow:35, wfAmount:500000, wfSpending:2000,
  wfReturn:5, wfInflation:3, wfMaxAge:95,
};

/* ===================== Engine ===================== */
function fvAnnuityFactor(n,r){ if(n<=0) return 0; return r===0? n : (Math.pow(1+r,n)-1)/r; }

function computeAll(){
  function spendAt(age){ return S.monthlySpending*12*Math.pow(1+S.inflation/100, age-S.ageNow); }
  function incomeAt(age){ return (S.countOtherIncome && age>=S.ageRetire) ? S.otherIncomeMonthly*12 : 0; }
  function gapAt(age){ return Math.max(0, spendAt(age)-incomeAt(age)); }
  function goalForever(age){ return 25*gapAt(age); }
  function goalUntilEnd(age){
    const n = Math.max(0, Math.round(S.endAge-age));
    let cap=0;
    for(let i=0;i<n;i++) cap += gapAt(age+i)/Math.pow(1+S.returnRate/100, i);
    return cap;
  }
  const rows=[];
  let wealth = S.currentWealth;
  const horizon = Math.max(S.endAge, S.ageRetire+30) - S.ageNow;
  for(let i=0;i<=horizon;i++){
    const age = S.ageNow+i;
    if(i>0) wealth = wealth*(1+S.returnRate/100) + S.monthlyContribution*12;
    rows.push({ age, wealth, goalForever: goalForever(age), goalUntilEnd: goalUntilEnd(age) });
  }
  const target = rows.find(r=>r.age===S.ageRetire) || rows[0];
  const aniosHasta = Math.max(0, S.ageRetire-S.ageNow);
  return { rows, target, aniosHasta };
}

function calcLevers(D){
  const goal = D.target.goalForever;
  const wealth = D.target.wealth;
  const shortfall = Math.max(0, goal-wealth);
  if(shortfall<=0){
    let ageOk = S.ageRetire;
    for(const row of D.rows){ if(row.wealth>=row.goalForever){ ageOk=row.age; break; } }
    return { onTrack:true, ageOk };
  }
  const n = Math.max(1, Math.round(S.ageRetire-S.ageNow));
  const r = S.returnRate/100;
  const extraMonthly = (shortfall/fvAnnuityFactor(n,r))/12;

  function diffWithReturn(rNew){ const back=S.returnRate; S.returnRate=rNew; const DD=computeAll(); S.returnRate=back; return DD.target.wealth-DD.target.goalForever; }
  let returnNeeded=null;
  if(diffWithReturn(40)>=0){ let lo=S.returnRate,hi=40; for(let i=0;i<40;i++){ const mid=(lo+hi)/2; if(diffWithReturn(mid)>=0) hi=mid; else lo=mid; } returnNeeded=hi; }

  function diffWithSpend(gNew){ const back=S.monthlySpending; S.monthlySpending=gNew; const DD=computeAll(); S.monthlySpending=back; return DD.target.wealth-DD.target.goalForever; }
  let spendNeeded=null;
  if(diffWithSpend(0)>=0){ let lo=0,hi=S.monthlySpending; for(let i=0;i<40;i++){ const mid=(lo+hi)/2; if(diffWithSpend(mid)>=0) lo=mid; else hi=mid; } spendNeeded=lo; }

  let ageNeeded=null;
  for(const row of D.rows){ if(row.age<S.ageRetire) continue; if(row.wealth>=row.goalForever){ ageNeeded=row.age; break; } }

  return { onTrack:false, shortfall, extraMonthly, returnNeeded, spendNeeded, ageNeeded };
}

function simulateDuration(capital, spendMonthly, returnRate, inflation, ageNow, ageMax){
  let cap = capital;
  const series=[{age:ageNow, capital:cap}];
  for(let age=ageNow+1; age<=ageMax; age++){
    const spendAnnual = spendMonthly*12*Math.pow(1+inflation/100, age-ageNow);
    cap = cap*(1+returnRate/100) - spendAnnual;
    series.push({age, capital:Math.max(0,cap)});
    if(cap<=0) return { runsOut:true, ageOut:age, series };
  }
  return { runsOut:false, ageOut:null, series };
}
function computeWindfall(){
  const res = simulateDuration(S.wfAmount, S.wfSpending, S.wfReturn, S.wfInflation, S.wfAgeNow, S.wfMaxAge);
  const annualSpendToday = S.wfSpending*12;
  const foreverCapital = S.wfReturn>0 ? annualSpendToday/(S.wfReturn/100) : Infinity;
  return {...res, foreverCapital};
}

/* ===================== UI helpers ===================== */
function field(key,label,suffix,step,hint){
  return `<div class="field"><label>${label}</label><div class="row">
    <input type="number" inputmode="decimal" data-field="${key}" step="${step||1}" value="${S[key]}" oninput="onNum('${key}',this.value)">
    ${suffix?`<span class="suffix">${suffix}</span>`:''}
  </div>${hint?`<div class="hint">${hint}</div>`:''}</div>`;
}
function toggleUI(key,label,hint){
  return `<div class="toggle-row"><div><p>${label}</p>${hint?`<p class="hint">${hint}</p>`:''}</div>
    <button class="switch ${S[key]?'on':''}" onclick="onToggle('${key}')"><span></span></button></div>`;
}
function out(id,val){ const el=document.getElementById(id); if(el) el.textContent=val; }
function outClass(id,cls){ const el=document.getElementById(id); if(el) el.className=cls; }
function outShow(id,show){ const el=document.getElementById(id); if(el) el.style.display = show?'':'none'; }

window.onNum=function(key,val){
  const parsed = val===''?0:parseFloat(val);
  S[key] = isNaN(parsed) ? S[key] : parsed;
  refreshCurrentTab();
}
window.onToggle=function(key){ S[key]=!S[key]; showTab(currentTab); }
window.toggleLegal=function(){
  const el=document.getElementById('disclaimer-section');
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}
window.setLang=function(l){ S.lang=l; applyStaticText(); renderNav(); showTab(currentTab); }

function applyStaticText(){
  out('t-eyebrow', t('hero_eyebrow'));
  out('t-title1', t('hero_title1'));
  out('t-titleEm', t('hero_title_em'));
  out('t-title2', t('hero_title2'));
  out('t-sub', t('hero_sub'));
  out('t-legal', t('hero_legal'));
  out('t-legalLinkLabel', t('legal_link'));
  out('t-langSwitch', t('lang_switch'));
  out('t-linksTitle', t('links_title'));
  out('t-linksSub', t('links_sub'));
  out('t-faqTitle', t('faq_title'));
  out('t-faqSub', t('faq_sub'));
  out('t-faqQ1', t('faq_q1')); out('t-faqA1', t('faq_a1'));
  out('t-faqQ2', t('faq_q2')); out('t-faqA2', t('faq_a2'));
  out('t-faqQ3', t('faq_q3')); out('t-faqA3', t('faq_a3'));
  out('t-faqQ4', t('faq_q4')); out('t-faqA4', t('faq_a4'));
  out('t-disclaimerTitle', t('disclaimer_title'));
  out('t-disclaimerBody', t('disclaimer_body'));
  out('t-footerNote', t('footer_note'));
  document.documentElement.lang = S.lang;
}

let currentTab='wealth';
let charts={};

function renderNav(){
  const tabs=[['wealth',t('nav_wealth')],['goal',t('nav_goal')],['windfall',t('nav_windfall')]];
  document.getElementById('tabs').innerHTML = tabs.map(([id,label])=>
    `<button class="${currentTab===id?'active':''}" onclick="setTab('${id}')">${label}</button>`).join('');
}
window.setTab=function(id){ currentTab=id; renderNav(); showTab(id); }

function showTab(id){
  const D = computeAll();
  const content = document.getElementById('content');
  if(id==='wealth'){ content.innerHTML = buildWealth(D); refreshWealth(D); }
  else if(id==='goal'){ content.innerHTML = buildGoal(D); initChartGoal(); refreshGoal(D); updateChartGoal(D); }
  else { content.innerHTML = buildWindfall(); initChartWf(); refreshWindfall(); }
}
function refreshCurrentTab(){
  const D = computeAll();
  if(currentTab==='wealth'){ refreshWealth(D); }
  else if(currentTab==='goal'){ refreshGoal(D); updateChartGoal(D); }
  else { refreshWindfall(); }
}
function areaGradient(ctx, area, rgb){
  if(!area) return `rgba(${rgb},0.2)`;
  const g = ctx.createLinearGradient(0, area.top, 0, area.bottom);
  g.addColorStop(0, `rgba(${rgb},0.5)`); g.addColorStop(1, `rgba(${rgb},0.02)`);
  return g;
}

/* ===================== Tab: Wealth ===================== */
function buildWealth(D){
  return `
  <div class="card">
    <h2>${t('w_title')}</h2>
    <div class="grid2">
      ${field('ageNow', t('w_age_now'), S.lang==='es'?'años':'yrs')}
      ${field('ageRetire', t('w_age_retire'), S.lang==='es'?'años':'yrs')}
      ${field('currentWealth', t('w_current'), '$/€', 1000)}
      ${field('monthlyContribution', t('w_contribution'), S.lang==='es'?'€/mes':'/mo', 50)}
      ${field('returnRate', t('w_return'), '%/yr', 0.1)}
      ${field('inflation', t('w_inflation'), '%/yr', 0.1)}
    </div>
  </div>
  <div class="card result-card">
    <p class="l"><span id="wr-prefix"></span> <span id="wr-age"></span> <span id="wr-mid"></span></p>
    <p id="wr-wealth" class="v-xl good"></p>
    <p class="hint"><span id="wr-note1"></span> <span id="wr-years"></span> <span id="wr-note2"></span></p>
  </div>`;
}
function refreshWealth(D){
  out('wr-prefix', t('w_result_prefix'));
  out('wr-age', fmt1(S.ageRetire));
  out('wr-mid', t('w_result_mid'));
  out('wr-wealth', fmtMoney(D.target.wealth));
  out('wr-note1', t('w_result_note'));
  out('wr-years', fmt1(D.aniosHasta));
  out('wr-note2', t('w_result_note2'));
}

/* ===================== Tab: Goal ===================== */
function buildGoal(D){
  return `
  <div class="card result-card">
    <div class="big-result">
      <div>
        <p class="l"><span id="gr-prefix"></span> <span id="gr-age"></span>, <span id="gr-havelabel"></span></p>
        <p id="gr-wealth" class="v-xl"></p>
      </div>
      <div><span id="gr-badge" class="badge"></span></div>
    </div>
    <div class="stat-grid">
      <div class="stat"><p class="l">${t('g_forever')}</p><p id="gr-forever" class="v"></p></div>
      <div class="stat"><p class="l">${t('g_until')}</p><p id="gr-until" class="v"></p></div>
    </div>
    <div class="field" style="max-width:240px;margin-top:12px;">${field('endAge', t('g_end_age_label'), S.lang==='es'?'años':'yrs',1)}</div>
  </div>

  <div class="card">
    <h2>${t('g_spend_title')}</h2>
    <div class="grid2">
      ${field('monthlySpending', t('g_spend'), S.lang==='es'?'€/mes':'/mo', 50)}
      ${field('otherIncomeMonthly', t('g_income'), S.lang==='es'?'€/mes':'/mo', 50)}
    </div>
    ${toggleUI('countOtherIncome', t('g_toggle_income'), t('g_toggle_income_hint'))}
  </div>

  <div class="card">
    <h2>${t('g_chart_title')}</h2>
    <div style="position:relative;height:300px;"><canvas id="chartGoal"></canvas></div>
    <div class="legend-row" style="margin-top:12px;">
      <span><i style="background:#22d3ee"></i>${t('g_legend_wealth')}</span>
      <span><i style="background:#a78bfa"></i>${t('g_legend_goal')}</span>
    </div>
  </div>

  <div class="card" id="levers-card"></div>
  `;
}
function initChartGoal(){
  const ctx=document.getElementById('chartGoal');
  if(charts.goal) charts.goal.destroy();
  charts.goal = new Chart(ctx,{
    type:'line',
    data:{ labels:[], datasets:[
      {label:t('g_legend_wealth'), data:[], borderColor:'#22d3ee', backgroundColor:(c)=>areaGradient(c.chart.ctx,c.chart.chartArea,'34,211,238'), fill:true, tension:.15, pointRadius:0, borderWidth:3.5},
      {label:t('g_legend_goal'), data:[], borderColor:'#a78bfa', borderDash:[7,4], pointRadius:0, borderWidth:3, fill:false},
    ]},
    options:{ responsive:true, maintainAspectRatio:false, animation:false, interaction:{mode:'index',intersect:false},
      scales:{ x:{title:{display:true,text:'Age', color:'#8b93a8'}, grid:{color:'rgba(255,255,255,.06)'}, ticks:{color:'#8b93a8'}},
               y:{ticks:{callback:v=>(v/1000)+'k', color:'#8b93a8'}, grid:{color:'rgba(255,255,255,.06)'}} },
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>c.dataset.label+': '+fmtMoney(c.parsed.y)}} } }
  });
}
function updateChartGoal(D){
  const data = D.rows.filter(r=>r.age<=Math.max(S.endAge,S.ageRetire+25));
  charts.goal.data.labels = data.map(r=>r.age);
  charts.goal.data.datasets[0].data = data.map(r=>r.wealth);
  charts.goal.data.datasets[1].data = data.map(r=>r.goalForever);
  charts.goal.update('none');
}
function renderLeversHTML(D){
  const L = calcLevers(D);
  if(L.onTrack){
    return `<h2>${t('g_how_title')}</h2>
      <div class="note">${t('g_already_prefix')} ${fmt1(S.ageRetire)} ${t('g_already_suffix')} <b>${fmt1(L.ageOk)}</b>.</div>`;
  }
  return `<h2>${t('g_how_title')} — ${fmtMoney(L.shortfall)} ${S.lang==='es'?'de más':'short'}</h2>
    <p class="hint" style="margin-bottom:14px;">${t('g_how_short')}</p>
    <div class="stat-grid">
      <div class="stat"><p class="l">${t('g_how_save')}</p><p class="v good">+${fmtMoney(L.extraMonthly)}/${S.lang==='es'?'mes':'mo'}</p></div>
      <div class="stat"><p class="l">${t('g_how_return')}</p><p class="v ${L.returnNeeded!==null?'good':'bad'}">${L.returnNeeded!==null?fmt1(L.returnNeeded)+'%/yr':t('g_how_unrealistic')}</p></div>
      <div class="stat"><p class="l">${t('g_how_spend')}</p><p class="v ${L.spendNeeded!==null?'good':'bad'}">${L.spendNeeded!==null?fmtMoney(L.spendNeeded)+'/'+(S.lang==='es'?'mes':'mo'):t('g_how_never')}</p></div>
      <div class="stat"><p class="l">${t('g_how_age')}</p><p class="v ${L.ageNeeded!==null?'good':'bad'}">${L.ageNeeded!==null?fmt1(L.ageNeeded):t('g_how_toofar')}</p></div>
    </div>`;
}
function refreshGoal(D){
  out('gr-prefix', t('g_badge_prefix'));
  out('gr-age', fmt1(S.ageRetire));
  out('gr-havelabel', t('g_badge_you_have'));
  out('gr-wealth', fmtMoney(D.target.wealth));
  out('gr-forever', fmtMoney(D.target.goalForever));
  out('gr-until', fmtMoney(D.target.goalUntilEnd)+' ('+fmt1(S.endAge)+')');
  const ok = D.target.wealth >= D.target.goalForever;
  out('gr-badge', ok? t('g_status_good') : t('g_status_bad'));
  outClass('gr-badge', 'badge '+(ok?'good':'bad'));
  document.getElementById('levers-card').innerHTML = renderLeversHTML(D);
}

/* ===================== Tab: Windfall ===================== */
function buildWindfall(){
  return `
  <div class="card">
    <h2>${t('wf_title')}</h2>
    <p class="hint" style="margin:-4px 0 16px;">${t('wf_desc')}</p>
    <div class="grid2">
      ${field('wfAgeNow', t('wf_age'), S.lang==='es'?'años':'yrs')}
      ${field('wfAmount', t('wf_amount'), '$/€', 5000)}
      ${field('wfSpending', t('wf_spending'), S.lang==='es'?'€/mes':'/mo', 50)}
      ${field('wfReturn', t('wf_return'), '%/yr', 0.1, t('wf_return_hint'))}
      ${field('wfInflation', t('wf_inflation'), '%/yr', 0.1)}
      ${field('wfMaxAge', t('wf_maxage'), S.lang==='es'?'años':'yrs', 1)}
    </div>
  </div>
  <div class="card result-card">
    <h2>${t('wf_result_title')}</h2>
    <p id="wfr-result" class="v-xl"></p>
    <div class="stat-grid" style="margin-top:14px;">
      <div class="stat"><p class="l">${t('wf_years_left')}</p><p id="wfr-years" class="v"></p></div>
      <div class="stat"><p class="l">${t('wf_forever_capital')}</p><p id="wfr-forever" class="v"></p></div>
    </div>
    <div id="wfr-note" class="note"></div>
  </div>
  <div class="card">
    <div style="position:relative;height:280px;"><canvas id="chartWf"></canvas></div>
  </div>`;
}
function initChartWf(){
  const ctx=document.getElementById('chartWf');
  if(charts.wf) charts.wf.destroy();
  charts.wf = new Chart(ctx,{
    type:'line',
    data:{ labels:[], datasets:[{label:'Capital', data:[], borderColor:'#22d3ee', backgroundColor:(c)=>areaGradient(c.chart.ctx,c.chart.chartArea,'34,211,238'), fill:true, tension:.2, pointRadius:0, borderWidth:3}] },
    options:{ responsive:true, maintainAspectRatio:false, animation:false,
      scales:{ x:{title:{display:true,text:'Age', color:'#8b93a8'}, grid:{color:'rgba(255,255,255,.06)'}, ticks:{color:'#8b93a8'}},
               y:{ticks:{callback:v=>(v/1000)+'k', color:'#8b93a8'}, grid:{color:'rgba(255,255,255,.06)'}} },
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>fmtMoney(c.parsed.y)}} } }
  });
}
function refreshWindfall(){
  const R = computeWindfall();
  out('wfr-result', R.runsOut? `${t('wf_runs_out')} ${R.ageOut}` : `${t('wf_lasts')} ${S.wfMaxAge}`);
  outClass('wfr-result', 'v-xl '+(R.runsOut?'bad':'good'));
  out('wfr-years', R.runsOut ? (R.ageOut-S.wfAgeNow) : `${S.wfMaxAge-S.wfAgeNow}+`);
  out('wfr-forever', isFinite(R.foreverCapital) ? fmtMoney(R.foreverCapital) : '—');
  outClass('wfr-note', 'note '+(R.runsOut?'danger':''));
  out('wfr-note', R.runsOut ? t('wf_note_bad') : `${t('wf_note_good')} ${S.wfMaxAge}.`);

  charts.wf.data.labels = R.series.map(r=>r.age);
  charts.wf.data.datasets[0].data = R.series.map(r=>r.capital);
  const rgb = R.runsOut? '244,63,94':'34,211,238';
  charts.wf.data.datasets[0].borderColor = R.runsOut? '#f43f5e':'#22d3ee';
  charts.wf.data.datasets[0].backgroundColor = (c)=>areaGradient(c.chart.ctx,c.chart.chartArea, rgb);
  charts.wf.update('none');
}

/* ===================== Boot ===================== */
applyStaticText();
renderNav();
showTab(currentTab);
