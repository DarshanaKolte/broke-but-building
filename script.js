const demos = [
  {cat:'real-estate', tag:'Real Estate', title:'AI Lead Qualification Agent', desc:'Qualifies property buyers by budget, location, timeline, and property type before sending clean lead notes to your team.', nodes:['New property inquiry','AI asks buyer criteria','Hot lead score created','CRM / sheet updated']},
  {cat:'real-estate', tag:'Real Estate', title:'Missed Call Recovery Agent', desc:'When a realtor misses a call, the system instantly follows up, captures intent, and books the next step automatically.', nodes:['Missed call detected','Instant follow-up sent','Lead details collected','Viewing call scheduled']},
  {cat:'real-estate', tag:'Real Estate', title:'Property Viewing Booking Agent', desc:'Books viewing appointments, sends confirmations, and reminds the buyer before the meeting.', nodes:['Buyer selects property','Calendar availability checked','Viewing booked','Reminder sent']},
  {cat:'real-estate', tag:'Real Estate', title:'End-to-End Real Estate System', desc:'A complete flow from inquiry to qualification, appointment booking, CRM update, and confirmation.', nodes:['Lead captured','AI qualifies','Meeting booked','Agent notified']},
  {cat:'healthcare', tag:'Healthcare', title:'Patient Appointment Booking Agent', desc:'Helps patients choose a service, find available slots, and book appointments without manual back-and-forth.', nodes:['Patient inquiry','Service selected','Slot matched','Appointment confirmed']},
  {cat:'healthcare', tag:'Healthcare', title:'Clinic Missed Call Callback Agent', desc:'Automatically follows up with patients after missed calls and collects appointment requirements.', nodes:['Missed patient call','Callback message sent','Symptoms / need captured','Front desk notified']},
  {cat:'healthcare', tag:'Healthcare', title:'Clinic FAQ Support Agent', desc:'Handles common clinic questions like timing, services, location, preparation, and appointment process.', nodes:['Patient question','AI checks knowledge base','Answer shared','Escalation if needed']},
  {cat:'healthcare', tag:'Healthcare', title:'End-to-End Clinic Automation', desc:'Connects patient inquiry, qualification, booking, reminders, and clinic team updates in one smooth flow.', nodes:['Inquiry received','Details collected','Appointment booked','Reminder automated']},
  {cat:'home-services', tag:'Home Services', title:'Service Request Intake Agent', desc:'Collects customer issue, address, urgency, preferred time, and job type before sending it to your team.', nodes:['Service request','Issue identified','Address captured','Job ticket created']},
  {cat:'home-services', tag:'Home Services', title:'Emergency Call Handling Agent', desc:'Prioritizes urgent calls for plumbing, roofing, electrical, HVAC, or cleaning teams.', nodes:['Urgent inquiry','AI detects priority','Technician alerted','Customer updated']},
  {cat:'home-services', tag:'Home Services', title:'Quote Collection Agent', desc:'Collects details needed for a quick estimate so your team can respond faster with better context.', nodes:['Quote request','Job details collected','Photos/link requested','Estimate task created']},
  {cat:'home-services', tag:'Home Services', title:'End-to-End Home Service System', desc:'Automates service inquiry, quote intake, scheduling, confirmation, and team notification.', nodes:['Customer inquiry','Details captured','Visit scheduled','Team notified']}
];

const grid = document.getElementById('demoGrid');
function renderDemos(filter='all'){
  grid.innerHTML = demos.filter(d => filter==='all' || d.cat===filter).map((d,i)=>`
    <article class="demo-card reveal visible">
      <div class="demo-video" data-video>
        <div class="demo-top"><span>${d.tag}</span><span>● Running</span></div>
        <div class="demo-nodes">${d.nodes.map(n=>`<div class="node">${n}</div>`).join('')}</div>
        <div class="demo-bottom"><span>AI Workflow</span><div class="progress"><span></span></div></div>
      </div>
      <span class="tag">${d.tag}</span>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </article>`).join('');
  attachMouseGlow();
}
renderDemos();

document.querySelectorAll('.demo-filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.demo-filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); renderDemos(btn.dataset.filter);
}));

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.industry-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active'); document.getElementById(btn.dataset.target).classList.add('active');
}));

document.querySelector('.nav-toggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));

document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Free Strategy Call Inquiry - ${data.get('business')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nBusiness Type: ${data.get('business')}\n\nAutomation Need:\n${data.get('message')}`);
  window.location.href = `mailto:brokebutbuilding2627@gmail.com?subject=${subject}&body=${body}`;
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function attachMouseGlow(){
  document.querySelectorAll('[data-video]').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r = card.getBoundingClientRect();
      card.style.setProperty('--x',`${e.clientX-r.left}px`);
      card.style.setProperty('--y',`${e.clientY-r.top}px`);
    });
  });
}
attachMouseGlow();
