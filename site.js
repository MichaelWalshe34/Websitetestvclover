'use strict';
const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
function closeMenu(){menu.setAttribute('aria-expanded','false');links.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
links.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.querySelector('#copy-email')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('michaelwalshe34@gmail.com');status.textContent='Email address copied.';}catch{status.textContent='Select the email address above, or choose Email me.';}});
const form=document.querySelector('#contact-form');
form?.addEventListener('submit',async e=>{e.preventDefault();const status=document.querySelector('#form-status');if(['localhost','127.0.0.1',''].includes(location.hostname)){status.textContent='This preview does not send messages. Use the Email me link to contact Michael directly.';return;}const button=form.querySelector('button');button.disabled=true;button.textContent='Sending…';status.textContent='';try{const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Submission failed');status.textContent='Thanks! Your message has been sent.';form.reset();}catch{status.textContent='Your message could not be sent. Please try again or email michaelwalshe34@gmail.com.';}finally{button.disabled=false;button.innerHTML='Send message <span aria-hidden="true">↗</span>';}});
