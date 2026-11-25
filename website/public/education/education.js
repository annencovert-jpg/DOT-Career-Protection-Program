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
function sectorPath(start,end,r,inner=48) {
  const point = (angle,radius) => [150+radius*Math.cos(angle),150+radius*Math.sin(angle)];
  const p1=point(start,r), p2=point(end,r), p3=point(end,inner), p4=point(start,inner);
  return 'M '+p1.join(' ')+' A '+r+' '+r+' 0 0 1 '+p2.join(' ')+' L '+p3.join(' ')+' A '+inner+' '+inner+' 0 0 0 '+p4.join(' ')+' Z';
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
    const start=-Math.PI/2+i*segment+0.045, end=start+segment-0.09;
    g.append(svgEl('path',{d:sectorPath(start,end,126),fill:'#edf0f4',stroke:i===selected?'#9a3412':'#d8dfe8','stroke-width':i===selected?2:1}));
    const applicable=data.total-data.na;
    if (data.yes && applicable) {
      const r=48+78*data.yes/applicable;
      g.append(svgEl('path',{d:sectorPath(start,end,r),fill:'#fb923c',stroke:'#b45309','stroke-width':0.75}));
    }
    if (applicable>1) for(let j=1;j<applicable;j++){
      const r=48+78*j/applicable;
      const p1=[150+r*Math.cos(start),150+r*Math.sin(start)],p2=[150+r*Math.cos(end),150+r*Math.sin(end)];
      g.append(svgEl('path',{d:'M '+p1.join(' ')+' A '+r+' '+r+' 0 0 1 '+p2.join(' '),fill:'none',stroke:'#ffffff','stroke-width':1.2}));
    }
    const a=(start+end)/2;
    const number=svgEl('text',{x:150+110*Math.cos(a),y:150+110*Math.sin(a)+5,fill:'#131b2e','font-size':14,'font-weight':800,'text-anchor':'middle'});
    number.textContent=String(i+1);
    g.append(number);
    const b=node('button');b.type='button';b.setAttribute('aria-pressed',String(i===selected));
    const count=applicable===0?'All marked N/A':data.yes+' of '+applicable+' practiced';
    b.setAttribute('aria-label',area.title+', '+count+', '+data.unanswered+' unanswered. Select questions.');
    b.append(node('span',String(i+1),'number'),node('span',area.title),node('small',count+(data.unanswered?' · '+data.unanswered+' open':'')));
    b.addEventListener('click',()=>selectArea(i,true));
    legend.append(b);
  });
  const count=responses.flat().filter(x=>x!==null).length;
  const total=responses.flat().length;
  $('progress').textContent=count+' of '+total+' answered';
  const center=svgEl('text',{x:150,y:145,'font-size':14,'text-anchor':'middle','font-weight':800,fill:'#131b2e'});center.textContent='My habits';
  const center2=svgEl('text',{x:150,y:165,'font-size':12,'text-anchor':'middle',fill:'#515f74'});center2.textContent=count===0?'Start here':count===total?'Reviewed':count+' answered';
  g.append(center,center2);chart.append(g);
  const work=wheel.map((a,i)=>({i,data:summary(i)})).filter(x=>x.data.work>0).sort((a,b)=>b.data.work-a.data.work);
  const focus=$('focus');focus.replaceChildren();
  if(work.length){
    const area=wheel[work[0].i];focus.append(node('strong','One place to focus: '+area.title),node('p',area.action));
    if(work.length>1)focus.append(node('small','You also marked other habits to work on. Choose the one that seems most useful to you.'));
  }else{
    focus.append(node('strong',count===total?'Keep what works':'One place to start'),node('p',count===total?'Choose one habit to reinforce this month. Your answers reflect only the habits you reported.':'As you answer, choose a habit you want to work on. Small changes count.'));
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
    const field=node('fieldset');field.append(node('legend',(j+1)+'. '+q));
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
  $('annual-progress-text').textContent=n+' of '+months.length+' knowledge checks completed correctly this visit.';
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
  const field=node('fieldset');field.append(node('legend',m.check.question));
  const feedback=node('p','','feedback');feedback.setAttribute('aria-live','polite');
  m.check.options.forEach((option,j)=>field.append(makeChoice('quiz-'+i,String(j),option,false,()=>{
    feedback.textContent=(j===m.check.answer?'That’s right. ':'Think about this: ')+m.check.explanation;
    if(j===m.check.answer)completed.add(i);else completed.delete(i);checkProgress();
  })));
  quiz.append(field,feedback);body.append(quiz);
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