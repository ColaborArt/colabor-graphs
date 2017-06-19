import './styles.css';
import './vis.css';

import './index.html';

import vis from './vis.js';
import App from '../src/app.js';

document.addEventListener("DOMContentLoaded", () => {
  const app = new App (vis);
});
