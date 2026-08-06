// Add any JavaScript code here
const features = [
  {
    key: 'a4',
    title: 'A4 Builder',
    body: 'Design print-ready A4 forms with precise layouts, grids, and repeatable sections.',
    list: ['Pixel-perfect layouts', 'Headers, footers & columns', 'Export to PDF instantly']
  },
  {
    key: 'cards',
    title: 'Card Builder',
    body: 'Build fast, touch-friendly forms for field work, checklists, and daily inputs.',
    list: ['Clean card sections', 'Fast entry on iPad', 'Great for repeat workflows']
  },
  {
    key: 'capture',
    title: 'Capture',
    body: 'Fill and complete forms in the field with an experience built for real work.',
    list: ['Camera, signatures & files', 'Touch-friendly field inputs', 'Works offline from start to finish']
  },
  {
    key: 'responses',
    title: 'Responses',
    body: 'Keep completed work organized and easy to review directly on your device.',
    list: ['Browse submitted forms', 'Review answers at a glance', 'Return to any response offline']
  },
  {
    key: 'export',
    title: 'Export',
    body: 'Turn forms and responses into portable documents that are ready to share or archive.',
    list: ['Print-ready PDFs', 'Share or archive files', 'Keep your data portable']
  },
  {
    key: 'roadmap',
    title: 'Roadmap',
    body: 'ColdForms is growing toward publishing, templates, teams, and better sharing.',
    list: ['QR publishing', 'Template marketplace', 'Team workflows']
  },
  {
    key: 'formulas',
    title: 'Formulas',
    body: 'Build calculations directly into your forms so totals and derived values stay accurate.',
    list: ['Calculate values live', 'Reference other form fields', 'Reduce manual calculations']
  },
  {
    key: 'chips',
    title: 'Chips',
    body: 'Use reusable chips to speed up repeated answers, statuses, categories, and tags.',
    list: ['Reusable values', 'Cleaner forms', 'Faster data entry']
  },
  {
    key: 'validation-settings',
    title: 'Validation Settings',
    body: 'Define clear rules for every field so responses arrive complete, consistent, and ready to use.',
    list: ['Set required fields', 'Control values, lengths & formats', 'Show clear validation messages']
  },
  {
    key: 'if-statements',
    title: 'UI If Statements',
    body: 'Create responsive forms that show the right interface for each answer and situation.',
    list: ['Show or hide UI elements', 'Respond to answers instantly', 'Build guided workflows']
  },
  {
    key: 'document-id',
    title: 'Document ID Widget',
    body: 'Give every form and response a clear identifier that is easy to recognize and track.',
    list: ['Consistent document labels', 'Faster record lookup', 'Clearer exported paperwork']
  },
  {
    key: 'chart-builder',
    title: 'Custom Chart Builder',
    body: 'Turn form data into clear visual charts with control over how information is presented.',
    list: ['Choose the data to display', 'Customize labels and colors', 'Build charts for each workflow']
  }
];

const title = document.querySelector('#feature-title');
const body = document.querySelector('#feature-body');
const list = document.querySelector('#feature-list');
const count = document.querySelector('#feature-count');
const total = document.querySelector('#feature-total');
const buttons = [...document.querySelectorAll('.feature-menu button, .feature-tabs button')];
let current = 0;

function setFeature(index) {
  current = (index + features.length) % features.length;
  const feature = features[current];
  title.textContent = feature.title;
  body.textContent = feature.body;
  list.innerHTML = feature.list.map(item => `<li>${item}</li>`).join('');
  count.textContent = String(current + 1).padStart(2, '0');
  buttons.forEach((button) => {
    const isActive = button.dataset.feature === feature.key;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setFeature(features.findIndex(feature => feature.key === button.dataset.feature)));
});

document.querySelector('#prev-feature').addEventListener('click', () => setFeature(current - 1));
document.querySelector('#next-feature').addEventListener('click', () => setFeature(current + 1));
total.textContent = String(features.length).padStart(2, '0');
setFeature(0);

const samples = [
  {
    key: 'onboarding',
    title: 'Employee Onboarding',
    documentTitle: 'EMPLOYEE ONBOARDING',
    code: 'HR',
    body: 'Welcome new team members with one organized form for the information every first day needs.',
    list: ['Personal and contact details', 'Role and start-date information', 'Policy acknowledgements'],
    fields: ['Employee name', 'Start date', 'Department', 'Emergency contact']
  },
  {
    key: 'flha',
    title: 'Field Level Hazard Assessment',
    documentTitle: 'FIELD LEVEL HAZARD ASSESSMENT',
    code: 'FLHA',
    body: 'Identify site hazards, document controls, and keep field teams aligned before work begins.',
    list: ['Task and location details', 'Hazard and control review', 'Worker acknowledgement'],
    fields: ['Project / location', 'Task description', 'Identified hazards', 'Controls and signatures']
  },
  {
    key: 'invoice',
    title: 'Invoice',
    documentTitle: 'INVOICE',
    code: 'INV',
    body: 'Create clear, professional invoices with the details customers and accounting teams expect.',
    list: ['Customer and invoice details', 'Itemized products or services', 'Totals and payment terms'],
    fields: ['Bill to', 'Invoice number', 'Line items and rates', 'Total and payment terms']
  }
];

const sampleTitle = document.querySelector('#sample-title');
const sampleBody = document.querySelector('#sample-body');
const sampleList = document.querySelector('#sample-list');
const sampleCount = document.querySelector('#sample-count');
const sampleTotal = document.querySelector('#sample-total');
const sampleDocumentTitle = document.querySelector('#sample-document-title');
const sampleDocumentCode = document.querySelector('#sample-document-code');
const sampleFields = document.querySelector('#sample-fields');
const sampleVisual = document.querySelector('#sample-visual');
const sampleButtons = [...document.querySelectorAll('.sample-tabs button')];
let currentSample = 0;

function setSample(index) {
  currentSample = (index + samples.length) % samples.length;
  const sample = samples[currentSample];
  sampleTitle.textContent = sample.title;
  sampleBody.textContent = sample.body;
  sampleList.innerHTML = sample.list.map(item => `<li>${item}</li>`).join('');
  sampleCount.textContent = String(currentSample + 1).padStart(2, '0');
  sampleDocumentTitle.textContent = sample.documentTitle;
  sampleDocumentCode.textContent = sample.code;
  sampleFields.innerHTML = sample.fields.map(field => `<div><span>${field}</span><i></i></div>`).join('');
  sampleVisual.dataset.samplePreview = sample.key;
  sampleButtons.forEach((button) => {
    const isActive = button.dataset.sample === sample.key;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

sampleButtons.forEach((button) => {
  button.addEventListener('click', () => setSample(samples.findIndex(sample => sample.key === button.dataset.sample)));
});

document.querySelector('#prev-sample').addEventListener('click', () => setSample(currentSample - 1));
document.querySelector('#next-sample').addEventListener('click', () => setSample(currentSample + 1));
sampleTotal.textContent = String(samples.length).padStart(2, '0');
setSample(0);

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
