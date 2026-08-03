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
    key: 'logic',
    title: 'Logic',
    body: 'Show the right questions at the right time using simple conditional logic.',
    list: ['Hide and reveal fields', 'Reduce mistakes', 'Guide users through complex forms']
  },
  {
    key: 'offline',
    title: 'Offline Only',
    body: 'Create, edit, and fill forms without needing a network connection.',
    list: ['No cloud required', 'Works on-site', 'Data stays under your control']
  },
  {
    key: 'chips',
    title: 'Chip System',
    body: 'Use reusable chips to speed up repeated answers, statuses, categories, and tags.',
    list: ['Reusable values', 'Cleaner forms', 'Faster data entry']
  },
  {
    key: 'forms',
    title: 'Form in Forms',
    body: 'Nest useful mini-forms inside larger workflows for real paperwork systems.',
    list: ['Complex business workflows', 'Connected sections', 'Less duplicate work']
  },
  {
    key: 'roadmap',
    title: 'Roadmap',
    body: 'ColdForms is growing toward publishing, templates, teams, and better sharing.',
    list: ['QR publishing', 'Template marketplace', 'Team workflows']
  },
  {
    key: 'about',
    title: 'About Us',
    body: 'ColdForms is built for people who want serious tools without handing their work to the cloud.',
    list: ['Privacy-first', 'Offline-first', 'Built for real work']
  }
];

const title = document.querySelector('#feature-title');
const body = document.querySelector('#feature-body');
const list = document.querySelector('#feature-list');
const count = document.querySelector('#feature-count');
const buttons = [...document.querySelectorAll('.feature-menu button')];
let current = 0;

function setFeature(index) {
  current = (index + features.length) % features.length;
  const feature = features[current];
  title.textContent = feature.title;
  body.textContent = feature.body;
  list.innerHTML = feature.list.map(item => `<li>${item}</li>`).join('');
  count.textContent = String(current + 1).padStart(2, '0');
  buttons.forEach(button => button.classList.toggle('active', button.dataset.feature === feature.key));
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setFeature(features.findIndex(feature => feature.key === button.dataset.feature)));
});

document.querySelector('#prev-feature').addEventListener('click', () => setFeature(current - 1));
document.querySelector('#next-feature').addEventListener('click', () => setFeature(current + 1));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
