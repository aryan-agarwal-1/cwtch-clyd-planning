// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- English / Welsh translation ----------

const translations = {
  en: {
    page_title: 'Cwtch Clyd Care Home | Planning Proposal, Abergele',
    meta_description: 'Planning proposal information and public consultation for Cwtch Clyd, a new care home in Abergele, North Wales.',

    txt_the_proposal: 'The Proposal',
    txt_key_facts: 'Key Facts',
    txt_documents: 'Documents',
    txt_have_your_say: 'Have Your Say',

    hero_lede: 'The proposal is for a new purpose-built care home in Abergele, designed to provide high-quality, dignified residential and nursing care in a modern, supportive environment close to the local community.',

    about_p1: 'We are seeking planning permission from <strong>Conwy County Borough Council</strong> for the development of Cwtch Clyd, a new care home in Abergele. We are keen to hear the views of the local community as part of this process, ahead of the formal planning application being submitted.',
    about_p2: 'The proposed development involves the erection of a new residential care facility on currently undeveloped land, comprising two linked units across three floors. Cwtch Clyd will provide 61 no. en-suite bedrooms, together with a range of communal and therapeutic facilities including lounge/dining rooms, quiet lounges and activity rooms, a hydrotherapy pool, gym, and internet caf&eacute;, ensuring residents have access to high-quality space for both everyday living and rehabilitation. The full suite of documents submitted as part of this planning application are available below.',

    how_to_comment_h3: 'How to Comment',
    how_to_comment_p: 'You can share your views on this proposal in any of the following ways:',
    li_online: '<strong>Online:</strong> Complete the form below under <a href="#have-your-say">Have Your Say</a>.',
    li_email: '<strong>Email:</strong> <a href="mailto:jack@felgateandpartners.co.uk">jack@felgateandpartners.co.uk</a>',
    li_post: '<strong>Post:</strong> Queens House, Queens Rd, Chester CH1 3BQ',

    site_photo_alt: 'Aerial view of North Wales Business Park, Abergele, with the proposed site marked by a red arrow',

    fact_label_location: 'Location',
    fact_label_authority: 'Local Planning Authority',
    fact_label_proposal: 'Proposal',
    fact_label_bedrooms: 'Number of Bedrooms',
    fact_value_location: 'Abergele, North Wales',
    fact_value_authority: 'Conwy County Borough',
    fact_value_proposal: 'New-Build Care Home',
    fact_value_bedrooms: '61 En-Suite Bedrooms',

    doc_design_access: 'Design and Access Statement',
    doc_site_location_plan: 'Site Location Plan',
    doc_proposed_site_plan: 'Proposed Site Plan',
    doc_ground_floor: 'Proposed Ground Floor Plan',
    doc_first_floor: 'Proposed First Floor Plan',
    doc_elevations: 'Proposed Elevations',
    doc_landscaping: 'Landscaping Plan',
    doc_transport: 'Transport Statement',
    doc_ecology: 'Ecology &amp; Biodiversity Net Gain Report',
    doc_arboricultural: 'Arboricultural Report',
    doc_flood_risk: 'Flood Risk Assessment',
    doc_drainage: 'Drainage Strategy',
    doc_download: 'Download',

    have_your_say_intro: 'We welcome comments from the local community on this proposal. Please complete the form below.',
    form_label_name: 'Name <span class="required">*</span>',
    form_label_email: 'Email <span class="required">*</span>',
    form_label_comment: 'Comment <span class="required">*</span>',
    form_fine_print: 'Any personal information you provide will be used only to consider and respond to your comments on this proposal, and will be handled in accordance with data protection legislation (GDPR).',
    submit_button: 'Submit Comment',

    txt_rights: 'All rights reserved.',
  },
  cy: {
    page_title: 'Cartref Gofal Cwtch Clyd | Cynnig Cynllunio, Abergele',
    meta_description: "Gwybodaeth am gynnig cynllunio ac ymgynghoriad cyhoeddus ar gyfer Cwtch Clyd, cartref gofal newydd yn Abergele, Gogledd Cymru.",

    txt_the_proposal: 'Y Cynnig',
    txt_key_facts: 'Ffeithiau Allweddol',
    txt_documents: 'Dogfennau',
    txt_have_your_say: 'Dywedwch Eich Dweud',

    hero_lede: "Cynnig yw hwn ar gyfer cartref gofal pwrpasol newydd yn Abergele, wedi'i gynllunio i ddarparu gofal preswyl a nyrsio o ansawdd uchel ac urddasol mewn amgylchedd modern a chefnogol yn agos at y gymuned leol.",

    about_p1: "Rydym yn ceisio caniat&acirc;d cynllunio gan <strong>Gyngor Bwrdeistref Sirol Conwy</strong> ar gyfer datblygu Cwtch Clyd, cartref gofal newydd yn Abergele. Rydym yn awyddus i glywed barn y gymuned leol fel rhan o'r broses hon, cyn cyflwyno'r cais cynllunio ffurfiol.",
    about_p2: "Mae'r datblygiad arfaethedig yn cynnwys codi cyfleuster gofal preswyl newydd ar dir sydd heb ei ddatblygu ar hyn o bryd, yn cynnwys dwy uned gysylltiedig ar draws tri llawr. Bydd Cwtch Clyd yn darparu 61 o ystafelloedd gwely en-suite, ynghyd ag amrywiaeth o gyfleusterau cymunedol a therapiwtig gan gynnwys ystafelloedd lolfa/bwyta, lolfeydd tawel ac ystafelloedd gweithgaredd, pwll hydrotherapi, campfa, a chaffi rhyngrwyd, gan sicrhau bod gan breswylwyr fynediad at ofod o safon uchel ar gyfer byw bob dydd ac adsefydlu fel ei gilydd. Mae'r set lawn o ddogfennau a gyflwynwyd fel rhan o'r cais cynllunio hwn ar gael isod.",

    how_to_comment_h3: 'Sut i Wneud Sylwadau',
    how_to_comment_p: "Gallwch rannu eich barn ar y cynnig hwn drwy unrhyw un o'r ffyrdd canlynol:",
    li_online: '<strong>Ar-lein:</strong> Llenwch y ffurflen isod o dan <a href="#have-your-say">Dywedwch Eich Dweud</a>.',
    li_email: '<strong>E-bost:</strong> <a href="mailto:jack@felgateandpartners.co.uk">jack@felgateandpartners.co.uk</a>',
    li_post: "<strong>Post:</strong> Queens House, Queens Rd, Chester CH1 3BQ",

    site_photo_alt: "Golwg awyr o Barc Busnes Gogledd Cymru, Abergele, gyda'r safle arfaethedig wedi'i nodi â saeth goch",

    fact_label_location: 'Lleoliad',
    fact_label_authority: 'Awdurdod Cynllunio Lleol',
    fact_label_proposal: 'Cynnig',
    fact_label_bedrooms: 'Nifer yr Ystafelloedd Gwely',
    fact_value_location: 'Abergele, Gogledd Cymru',
    fact_value_authority: 'Bwrdeistref Sirol Conwy',
    fact_value_proposal: 'Cartref Gofal Newydd Sbon',
    fact_value_bedrooms: '61 Ystafell Wely En-suite',

    doc_design_access: 'Datganiad Dylunio a Mynediad',
    doc_site_location_plan: 'Cynllun Lleoliad y Safle',
    doc_proposed_site_plan: 'Cynllun Safle Arfaethedig',
    doc_ground_floor: 'Cynllun Llawr Gwaelod Arfaethedig',
    doc_first_floor: 'Cynllun Llawr Cyntaf Arfaethedig',
    doc_elevations: 'Wynebweddau Arfaethedig',
    doc_landscaping: 'Cynllun Tirlunio',
    doc_transport: 'Datganiad Trafnidiaeth',
    doc_ecology: 'Adroddiad Ecoleg ac Ennill Net i Fioamrywiaeth',
    doc_arboricultural: 'Adroddiad Coedyddol',
    doc_flood_risk: 'Asesiad Perygl Llifogydd',
    doc_drainage: 'Strategaeth Draenio',
    doc_download: 'Lawrlwytho',

    have_your_say_intro: "Rydym yn croesawu sylwadau gan y gymuned leol ar y cynnig hwn. Llenwch y ffurflen isod os gwelwch yn dda.",
    form_label_name: 'Enw <span class="required">*</span>',
    form_label_email: 'E-bost <span class="required">*</span>',
    form_label_comment: 'Sylw <span class="required">*</span>',
    form_fine_print: "Bydd unrhyw wybodaeth bersonol a ddarperir gennych yn cael ei defnyddio dim ond i ystyried ac ymateb i'ch sylwadau ar y cynnig hwn, a bydd yn cael ei thrin yn unol &acirc;'r ddeddfwriaeth diogelu data (GDPR).",
    submit_button: 'Cyflwyno Sylw',

    txt_rights: 'Cedwir pob hawl.',
  },
};

const langToggle = document.getElementById('langToggle');
const metaDescriptionEl = document.querySelector('meta[name="description"]');

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === 'cy' ? 'cy' : 'en-GB';
  document.title = dict.page_title;
  if (metaDescriptionEl) {
    metaDescriptionEl.setAttribute('content', dict.meta_description);
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) {
      el.setAttribute('alt', dict[key]);
    }
  });

  if (langToggle) {
    langToggle.querySelectorAll('.lang-option').forEach((opt) => {
      opt.classList.toggle('is-active', opt.dataset.langOption === lang);
    });
    langToggle.setAttribute(
      'aria-label',
      lang === 'cy' ? 'Switch to English' : "Switch to Welsh / Newid i'r Gymraeg"
    );
  }

  localStorage.setItem('cwtchClydLang', lang);
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'cy' ? 'cy' : 'en';
    setLanguage(current === 'en' ? 'cy' : 'en');
  });
}

const savedLang = localStorage.getItem('cwtchClydLang');
setLanguage(savedLang === 'cy' ? 'cy' : 'en');
