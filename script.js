document.addEventListener("DOMContentLoaded",()=>{
 const p=window.PORTFOLIO_PROFILE||{}, set=(id,v)=>{const e=document.getElementById(id);if(e&&v)e.textContent=v};
 ["brand","name","footerName"].forEach(id=>set(id,p.name));
 set("role",p.role);set("intro",p.intro);set("aboutText",p.about);set("location",p.location);set("factLocation",p.location);set("position",p.position);set("affiliation",p.affiliation);set("initials",p.initials);set("year",new Date().getFullYear());
 if(p.email){set("emailText",p.email);const a=document.getElementById("emailLink");a.href="mailto:"+p.email;a.textContent=p.email+" ↗"}
 [["linkedin",p.linkedin],["scholar",p.googleScholar],["orcid",p.orcid]].forEach(([id,url])=>{const e=document.getElementById(id);if(url){e.href=url;e.hidden=false}});
 if(p.cvFile){const e=document.getElementById("cvLink");e.href=p.cvFile;e.textContent="Download my CV ↓";e.classList.remove("disabled");e.removeAttribute("aria-disabled")}
 else if(p.email){const e=document.getElementById("cvLink");e.href="mailto:"+p.email+"?subject=Request%20for%20academic%20CV";e.textContent="Request my CV ↗";e.classList.remove("disabled");e.removeAttribute("aria-disabled")}
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const render=(id,arr,fn)=>{const e=document.getElementById(id);if(e&&arr?.length)e.innerHTML=arr.map(fn).join("")};
 render("interests",p.interests,(x,i)=>`<article><small>${String(i+1).padStart(2,"0")}</small><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></article>`);
 render("educationList",p.education,x=>`<article><small>${esc(x.year)}</small><div><h3>${esc(x.degree)}</h3><p>${esc(x.institution)}</p><p>${esc(x.detail||"")}</p></div></article>`);
 render("experienceList",p.experience,x=>`<article><small>${esc(x.year)}</small><div><h3>${esc(x.degree)}</h3><p>${esc(x.institution)}</p><p>${esc(x.detail||"")}</p></div></article>`);
 render("projectList",p.projects,x=>`<article><small>${esc(x.type)}</small><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></article>`);
 render("publicationList",p.publications,x=>`<article><small>${esc(x.year)}</small><div><h3>${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)} ↗</a>`:esc(x.title)}</h3><p>${esc(x.detail)}</p></div></article>`);
 render("skillsList",p.skills,x=>`<span>${esc(x)}</span>`);
 const menu=document.getElementById("menu"),nav=document.getElementById("navlinks");
 menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
});