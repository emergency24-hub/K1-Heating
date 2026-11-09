/* EDIT BUSINESS DETAILS AND SERVICE CONTENT HERE. All images live in assets/. */
const SITE = {
  name: 'K1 Heating Solution Limited',
  phoneDisplay: '07520 659236',
  phoneHref: '+447520659236',
  email: 'info@k1heatingsolution.uk',
  domain: 'k1heatingsolution.uk',
  registeredAddress: '20 Partridge Road, Birmingham, England, B26 2DA',
  companyNumber: '12614847',
  serviceArea: 'Birmingham and surrounding areas',
  about: 'K1 Heating Solution Limited provides boiler, heating, gas and plumbing work for customers in Birmingham and surrounding areas.',
  services: [
    {id:'boiler-servicing', title:'Boiler servicing', image:'assets/004.jpg', summary:'Routine servicing to check your boiler and keep it working as intended.', intro:'A boiler service is a chance to check how the appliance is operating and identify any issues that need attention.', points:['Boiler inspection and servicing','Advice on issues found during the visit','Clear next steps if further work is needed']},
    {id:'boiler-breakdowns', title:'Boiler breakdowns', image:'assets/002.jpg', summary:'Help diagnosing boiler faults and arranging the right repair.', intro:'If your boiler has stopped working or is behaving unexpectedly, get in touch with details of the fault.', points:['Fault diagnosis','Boiler repairs where appropriate','Advice on repair options']},
    {id:'boiler-installations', title:'New boiler installations', image:'assets/intro-image.jpg', summary:'Boiler installation and replacement for your home.', intro:'Discuss a new boiler or replacement installation suited to your property and heating needs.', points:['Boiler replacement and installation','Discussion of the work involved','Heating and hot water considerations']},
    {id:'gas-safety-checks', title:'Gas safety checks', image:'assets/015.jpg', summary:'Gas safety checks, including landlord certificates and CP12 work.', intro:'Arrange a gas safety check for relevant appliances and pipework. Contact us to discuss what your property needs.', points:['Gas safety checks','Landlord certificates / CP12','Gas leak detection and pipework work']},
    {id:'gas-appliances', title:'Gas appliance installations', image:'assets/service-page-img.jpg', summary:'Gas cooker, hob and other appliance installation work.', intro:'We can discuss installation or disconnection of gas appliances, including cookers and hobs.', points:['Gas cooker and hob installation','Gas appliance installation and disconnection','Gas fire servicing and repair']},
    {id:'plumbing', title:'Plumbing & heating', image:'assets/012.jpg', summary:'Plumbing repairs, radiators and hot water system work.', intro:'From plumbing maintenance to radiator and hot water issues, tell us what needs attention.', points:['Plumbing maintenance and repairs','Radiator installation and relocation','Hot water system repair']}
  ],
  additionalWork: [
    'Central heating system upgrades','Emergency plumbing repairs','Gas appliance disconnection','Gas fire servicing and repair','Gas leak detection','Gas pipework installation','Heating system flushing','Hot water system repair','Immersion heater installation and repair','Radiator installation and relocation','Smart thermostat installation','Thermostat and control upgrades','Unvented cylinder servicing'
  ]
};

const main = document.querySelector('#main');
const phoneLink = `tel:${SITE.phoneHref}`;
const emailLink = `mailto:${SITE.email}`;
const serviceUrl = id => `#service/${id}`;
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function card(service, index) {
  return `<a class="service-card" href="${serviceUrl(service.id)}" aria-label="Read about ${esc(service.title)}"><img src="${service.image}" alt="${esc(service.title)} work by K1 Heating Solution" loading="lazy"><div class="service-body"><span class="service-number">0${index + 1} / SERVICE</span><h3>${esc(service.title)}</h3><p>${esc(service.summary)}</p><span class="text-link">View service</span></div></a>`;
}

function home() {
  main.innerHTML = `
    <section id="home" class="hero"><div class="wrap hero-grid"><div class="hero-copy"><span class="eyebrow">K1 Heating Solution Limited</span><h1>Heating sorted. <em>Home comfortable.</em></h1><p>Boiler, gas, heating and plumbing services in Birmingham and surrounding areas.</p><div class="button-row"><a class="btn" href="${phoneLink}">Call ${SITE.phoneDisplay}</a><a class="btn outline" href="#services">Explore services</a></div></div><div class="hero-media"><img src="assets/intro-image.jpg" alt="Domestic boiler installation by K1 Heating Solution"></div></div></section>
    <section id="services" class="section"><div class="wrap"><div class="section-head"><div><span class="eyebrow">What we do</span><h2>Services for your home</h2></div><p>Choose a service to see what the work covers, then call to talk through your needs.</p></div><div class="services-grid">${SITE.services.map(card).join('')}</div></div></section>
    <section class="section dark-band"><div class="wrap band-grid"><div><span class="eyebrow">More ways we can help</span><h2>Heating and plumbing, beyond the basics.</h2><p>Ask us about these jobs when you call.</p></div><ul class="work-list">${SITE.additionalWork.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div></section>
    <section id="about" class="section"><div class="wrap about-grid"><div class="about-photo"><img src="assets/017.jpg" alt="Radiator installation project" loading="lazy"></div><div class="about-copy"><span class="eyebrow">About K1</span><h2>Practical help for heating and plumbing work.</h2><p>${esc(SITE.about)}</p><p>From a boiler fault to a new radiator or gas appliance, call us to explain the work you need.</p><div class="fact-row"><div class="fact">Boilers & heating</div><div class="fact">Gas appliances</div><div class="fact">Plumbing repairs</div><div class="fact">Birmingham based</div></div></div></div></section>
    <section id="areas" class="section dark-band"><div class="wrap areas-grid"><div><span class="eyebrow">Service area</span><h2>Based in Birmingham.</h2><p>We serve Birmingham and surrounding areas. If you are nearby, call with your postcode and the work you need.</p><a class="btn" href="${phoneLink}">Check your area</a></div><div class="area-panel"><span class="eyebrow">Our registered office</span><strong>Birmingham, B26</strong><p>${esc(SITE.registeredAddress)}</p><p>Service visits are arranged by contacting us directly.</p></div></div></section>
    <section id="contact" class="section contact-section"><div class="wrap contact-grid"><div><span class="eyebrow">Get in touch</span><h2>Tell us what needs doing.</h2><p>For a boiler, gas, heating or plumbing enquiry, call or email K1 Heating Solution Limited.</p></div><div class="contact-links"><a href="${phoneLink}"><small>Call us</small>${SITE.phoneDisplay}</a><a href="${emailLink}"><small>Email us</small>${SITE.email}</a></div></div></section>`;
}

function servicePage(service) {
  main.innerHTML = `<section class="page-hero"><div class="wrap"><a class="back-link" href="#services">All services</a><span class="eyebrow">Our services</span><h1>${esc(service.title)}</h1><p>${esc(service.summary)}</p><a class="btn" href="${phoneLink}">Call ${SITE.phoneDisplay}</a></div></section><section class="section"><div class="wrap detail-grid"><div class="detail-copy"><span class="eyebrow">About this service</span><h2>How we can help</h2><p>${esc(service.intro)}</p><ul>${service.points.map(point => `<li>${esc(point)}</li>`).join('')}</ul><div class="service-cta"><p>Need help with ${esc(service.title.toLowerCase())}? Tell us about the property and the issue when you get in touch.</p><a class="btn dark" href="${phoneLink}">Call ${SITE.phoneDisplay}</a></div></div><img class="detail-photo" src="${service.image}" alt="${esc(service.title)} work by K1 Heating Solution"></div></section><section class="section related"><div class="wrap"><span class="eyebrow">Other services</span><h2>Explore more work</h2><div class="related-links">${SITE.services.filter(item => item.id !== service.id).map(item => `<a href="${serviceUrl(item.id)}">${esc(item.title)}</a>`).join('')}</div></div></section>`;
}

function render() {
  const match = location.hash.match(/^#service\/([a-z0-9-]+)$/);
  const service = match && SITE.services.find(item => item.id === match[1]);
  if (service) { servicePage(service); document.title = `${service.title} | K1 Heating Solution Limited`; }
  else { home(); document.title = 'K1 Heating Solution Limited | Heating & Plumbing in Birmingham'; }
  document.querySelector('#primary-nav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
  if (match) window.scrollTo(0,0);
  else if (location.hash && location.hash !== '#home') requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
}

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const nav = document.querySelector('#primary-nav');
  const open = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});
document.querySelector('#primary-nav').addEventListener('click', () => {
  document.querySelector('#primary-nav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
});
document.querySelector('#year').textContent = new Date().getFullYear();
window.addEventListener('hashchange', render);
render();
