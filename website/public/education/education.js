import { wheel, months } from './curriculum.js';

const $ = id => document.getElementById(id);
const node = (tag, value, cls) => {
  const n = document.createElement(tag);
  if (value != null) n.textContent = value;
  if (cls) n.className = cls;
  return n;
};
const responses = wheel.map(area => area.questions.map(() => null));
let selected = 0;
const choiceLabels = [['yes','I practice this'],['work','Working on it'],['na','Not applicable']];
const summary = i => {
  const row = responses[i];
  return {
    yes: row.filter(x => x === 'yes').length,
    work: row.filter(x => x === 'work').length,
    na: row.filter(x => x === 'na').length,
    unanswered: row.filter(x => x === null).length,
    total: row.length
  };
};
function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg',tag);
  for (const [key,value] of Object.entries(attrs)) el.setAttribute(key,String(value));
  return el;
}
const chartLabels = [
  ['Cannabis', '& hemp'], ['Alcohol', 'decisions'], ['Medication', 'awareness'],
  ['Stress', '& coping'], ['Social', 'boundaries'], ['Sleep & road', 'readiness']
];
const statusMeta = {
  yes: {glyph:'✓',fill:'#166534',ink:'#ffffff',label:'I practice this'},
  work: {glyph:'~',fill:'#fbbf24',ink:'#482c00',label:'Working on it'},
  open: {glyph:'○',fill:'#e7edf3',ink:'#334155',label:'Not answered'},
  na: {glyph:'—',fill:'#778393',ink:'#ffffff',label:'Not applicable'}
};
const polar = (angle,r) => [210+r*Math.cos(angle),210+r*Math.sin(angle)];
function sectorPath(start,end,r,inner=64) {
  const p1=polar(start,r), p2=polar(end,r), p3=polar(end,inner), p4=polar(start,inner);
  return 'M '+p1.join(' ')+' A '+r+' '+r+' 0 0 1 '+p2.join(' ')+' L '+p3.join(' ')+' A '+inner+' '+inner+' 0 0 0 '+p4.join(' ')+' Z';
}
function svgText(g, x, y, value, attrs={}) {
  const t=svgEl('text',{x,y,'text-anchor':'middle','dominant-baseline':'middle',...attrs});
  t.textContent=value;g.append(t);return t;
}
function statusChip(value,questionNumber) {
  const type=value||'open', status=statusMeta[type];
  const chip=node('span',null,'question-chip '+type);
  const sym=node('span',status.glyph,'chip-glyph');sym.setAttribute('aria-hidden','true');
  chip.append(node('span','Q'+questionNumber),sym);
  chip.title='Question '+questionNumber+': '+status.label;
  chip.setAttribute('aria-label',chip.title);
  return chip;
}
function renderChart() {
  const chart = $('wheel-chart');
  chart.querySelectorAll('g').forEach(x => x.remove());
  const g=svgEl('g',{'aria-hidden':'true'});
  const legend=$('legend');
  legend.replaceChildren();
  wheel.forEach((area,i)=>{
    const data=summary(i);
    const segment=2*Math.PI/wheel.length;
    const middle=-Math.PI/2+i*segment;
    const start=middle-segment/2+0.035, end=middle+segment/2-0.035;
    const radius=126;
    const slot=(end-start)/data.total;
    for(let j=0;j<data.total;j++){
      const status=statusMeta[responses[i][j]||'open'];
      const a1=start+j*slot+0.012, a2=start+(j+1)*slot-0.012;
      const a=(a1+a2)/2, path=svgEl('path',{d:sectorPath(a1,a2,radius),fill:status.fill,stroke:'#ffffff','stroke-width':1.4,class:'wheel-slot'});
      path.addEventListener('click',()=>selectArea(i,true));
      const title=svgEl('title',{});title.textContent=area.title+', question '+(j+1)+': '+status.label+'. '+area.questions[j];
      path.append(title);g.append(path);
      const symbol=polar(a,107), q=polar(a,82);
      svgText(g,...symbol,status.glyph,{'font-size':23,'font-weight':800,fill:status.ink,'pointer-events':'none'});
      svgText(g,...q,String(j+1),{'font-size':12,'font-weight':700,fill:status.ink,'pointer-events':'none'});
    }
    g.append(svgEl('path',{d:sectorPath(start,end,radius),fill:'none',stroke:i===selected?'#9a3412':'#8b98a6','stroke-width':i===selected?3.5:1.2,'pointer-events':'none'}));
    const label=polar(middle,175);
    const lines=chartLabels[i]||[area.title];
    lines.forEach((line,j)=>svgText(g,label[0],label[1]+(j-(lines.length-1)/2)*16,line,{'font-size':14.5,'font-weight':i===selected?800:700,fill:i===selected?'#9a3412':'#131b2e'}));
    const b=node('button');b.type='button';b.setAttribute('aria-pressed',String(i===selected));
    const counts=data.yes+' practiced · '+data.work+' working · '+data.unanswered+' open · '+data.na+' N/A';
    b.setAttribute('aria-label',area.title+', '+counts+'. Select questions.');
    const title=node('span',area.title,'area-name');
    const chips=node('span',null,'question-chips');
    responses[i].forEach((v,j)=>chips.append(statusChip(v,j+1)));
    const stats=node('small',counts,'area-count');
    b.append(title,chips,stats);
    b.addEventListener('click',()=>selectArea(i,true));
    legend.append(b);
  });
  const values=responses.flat(), count=values.filter(x=>x!==null).length, total=values.length;
  $('progress').textContent=count+' of '+total+' answered';
  const totals=$('wheel-totals');totals.replaceChildren();
  ['yes','work','open','na'].forEach(key=>{
    const amount=values.filter(v=>(v||'open')===key).length;
    const label={yes:'Practiced',work:'Working on',open:'Open',na:'N/A'}[key];
    const tile=node('div',null,'total-tile '+key);tile.append(node('strong',String(amount)),node('span',label));totals.append(tile);
  });
  svgText(g,210,199,'My habits',{'font-size':17,'font-weight':800,fill:'#131b2e'});
  svgText(g,210,220,count+' / '+total+' answered',{'font-size':13,fill:'#515f74'});
  chart.append(g);
  const work=wheel.map((a,i)=>({i,data:summary(i)})).filter(x=>x.data.work>0).sort((a,b)=>b.data.work-a.data.work);
  const focus=$('focus');focus.replaceChildren();
  if(work.length){
    const area=wheel[work[0].i];focus.append(node('strong','One place to focus: '+area.title),node('p',area.action));
    if(work.length>1)focus.append(node('small','You also marked other habits to work on. Choose the one that seems most useful to you.'));
  }else{
    focus.append(node('strong',count===total?'Choose one next step':'One place to start'),node('p',count===total?'Pick a habit that matters to you and reinforce it this month. Your answers reflect only the habits you reported.':'As you answer, choose a habit you want to work on. Small changes count.'));
  }
}
function makeChoice(name,value,label,checked,callback,type='radio'){
  const wrap=node('label',null,'choice');
  const input=node('input');input.type=type;input.name=name;input.value=value;input.checked=checked;
  input.addEventListener('change',callback);
  wrap.append(input,node('span',label));return wrap;
}
function renderQuestions(){
  const area=wheel[selected],container=$('questions');
  $('question-step').textContent='Area '+(selected+1)+' of '+wheel.length;
  const heading=node('h3',area.title);heading.id='area-title';heading.tabIndex=-1;container.replaceChildren(heading);
  area.questions.forEach((q,j)=>{
    const field=node('fieldset');const label=node('legend');label.append(node('span','Q'+(j+1),'question-ref'),node('span',q));field.append(label);
    choiceLabels.forEach(([value,label])=>field.append(makeChoice('wheel-'+selected+'-'+j,value,label,responses[selected][j]===value,()=>{responses[selected][j]=value;renderChart();})));
    container.append(field);
  });
  $('prev-area').disabled=selected===0;
  $('next-area').textContent=selected===wheel.length-1?'View my wheel':'Next area';
}
function selectArea(i,focus){selected=i;renderQuestions();renderChart();if(focus)$('area-title').focus({preventScroll:false});}
$('prev-area').addEventListener('click',()=>{if(selected>0)selectArea(selected-1,true);});
$('next-area').addEventListener('click',()=>{if(selected<wheel.length-1)selectArea(selected+1,true);else{$('wheel-chart').scrollIntoView({block:'center'});$('legend').querySelector('button').focus({preventScroll:true});}});
$('reset').addEventListener('click',()=>{responses.forEach(row=>row.fill(null));selectArea(0,true);});
$('start-area').addEventListener('click',()=>selectArea(selected,true));
selectArea(0,false);

const topicMap = {
  cannabis:['february'],alcohol:['june','november'],stimulants:['july'],medication:['april'],stress:['march','august','december'],social:['may','november'],sleep:['july','october'],rules:['january','september']
};
const topics=[['all','All topics'],['cannabis','Cannabis & hemp'],['alcohol','Alcohol'],['stimulants','Stimulants'],['medication','Medications'],['stress','Stress & support'],['social','Social boundaries'],['sleep','Sleep & fatigue'],['rules','DOT rules & refusals']];
let currentTopic='all';
function monthKey(month){return String(month.month).toLowerCase().replace(/[^a-z]/g,'');}
function filterLessons(t){
  currentTopic=t;
  const ids=t==='all'?null:topicMap[t];
  const cards=[...$('month-grid').children],lessons=[...$('lesson-list').children];
  let shown=0;
  cards.forEach((card,i)=>{
    const match=!ids||ids.includes(monthKey(months[i]));
    card.hidden=!match;lessons[i].hidden=!match;
    if(match)shown++;
  });
  for(const button of $('topic-filters').querySelectorAll('button'))button.setAttribute('aria-pressed',String(button.dataset.topic===currentTopic));
  $('filter-count').textContent=shown+' of '+months.length+' lessons';
}
topics.forEach(([id,title])=>{
  const b=node('button',title,'filter');b.type='button';b.dataset.topic=id;
  b.addEventListener('click',()=>filterLessons(id));$('topic-filters').append(b);
});
const completed = new Set();
function checkProgress(){
  const n=completed.size;
  $('annual-progress-text').textContent=n+' of '+months.length+' monthly knowledge checks completed this visit (all three correct). Review is not saved.';
  $('annual-progress-bar').value=n;
  $('annual-badge').hidden=n!==months.length;
  if(n===months.length)$('badge-year').textContent='Learning year '+new Date().getFullYear();
}
function lessonCard(m,i){
  const id=monthKey(m);
  const a=node('a');a.href='#'+id;
  a.append(node('small',m.month),node('strong',m.title),node('span','Read lesson →'));
  $('month-grid').append(a);

  const detail=node('details',null,'card lesson');detail.id=id;
  const summ=node('summary');const text=node('span');
  text.append(node('strong',m.title),node('small',m.summary));
  summ.append(node('span',String(m.month).slice(0,3),'month-tag'),text);detail.append(summ);
  const body=node('div',null,'lesson-body');
  (m.education||[]).forEach(section=>body.append(node('h3',section.heading),node('p',section.text)));
  const activity=node('div',null,'activity');
  activity.append(node('h3',m.activity.title),node('p',m.activity.instructions));
  const af=node('fieldset');af.append(node('legend','Choose the actions you want to try.'));
  const afb=node('p','','feedback');afb.setAttribute('aria-live','polite');
  const activityOptions=m.activity.options||[];
  activityOptions.forEach((option,j)=>af.append(makeChoice('activity-'+i,String(j),option,false,()=>{
    const n=af.querySelectorAll('input:checked').length;
    afb.textContent=n===0?'Choose what fits your situation.':n+' step'+(n===1?'':'s')+' selected. Keep your next step in mind this month.';
  },'checkbox')));
  activity.append(af,afb);body.append(activity);
  const quiz=node('div',null,'knowledge');quiz.append(node('h3','Knowledge check'));
  const checks=m.checks||[m.check];
  const answers=new Array(checks.length).fill(null);
  const quizStatus=node('p','0 of '+checks.length+' correct. You can try again.','quiz-status');
  quizStatus.setAttribute('aria-live','polite');
  quiz.append(quizStatus);
  checks.forEach((check,k)=>{
    const field=node('fieldset');field.append(node('legend',(k+1)+'. '+check.question));
    const feedback=node('p','','feedback');feedback.setAttribute('aria-live','polite');
    check.options.forEach((option,j)=>field.append(makeChoice('quiz-'+i+'-'+k,String(j),option,false,()=>{
      const correct=j===check.answer;
      feedback.textContent=(correct?'That’s right. ':'Think about this: ')+(check.feedback?.[j]||check.explanation);
      feedback.classList.toggle('correct',correct);feedback.classList.toggle('retry',!correct);
      answers[k]=correct;
      const count=answers.filter(x=>x===true).length;
      quizStatus.textContent=count+' of '+checks.length+' correct.'+(count===checks.length?' Monthly knowledge check complete.':' You can try again.');
      if(count===checks.length)completed.add(i);else completed.delete(i);checkProgress();
    })));
    field.append(feedback);quiz.append(field);
  });
  body.append(quiz);
  body.append(node('h3','Learn more'));
  const list=node('ul',null,'resource-list');
  m.resources.forEach(resource=>{
    const li=node('li'),a=node('a',resource.label);
    if(!resource.url.startsWith('https://'))return;
    a.href=resource.url;a.rel='noreferrer';
    li.append(a,node('span',' · '+resource.description));list.append(li);
  });
  body.append(list);detail.append(body);$('lesson-list').append(detail);
}
months.forEach(lessonCard);filterLessons('all');checkProgress();
function openHash(){
  const key=window.location.hash.slice(1);
  const lesson=document.getElementById(key);
  if(lesson&&lesson.tagName==='DETAILS'){
    if(lesson.hidden)filterLessons('all');
    lesson.open=true;
    requestAnimationFrame(()=>lesson.scrollIntoView({block:'start'}));
  }
}
window.addEventListener('hashchange',openHash);
$('month-grid').addEventListener('click',e=>{
  const target=e.target.closest('a');
  if(target&&target.hash===window.location.hash)openHash();
});
openHash();