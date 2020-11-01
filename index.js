import App from './scripts/view/App.js';
import swRegister from './scripts/utils/sw-register.js';

const app = new App({
  button: document.getElementById('button'),
  content: document.getElementById('content')
});

window.addEventListener('hashchange', () => {
  document.getElementById('container');
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});