import './styles.css';
import './vis.css';

import './index.html';

import vis from './vis.min.js';
import App from '../src/app.js';

document.addEventListener("DOMContentLoaded", () => {
  const app = new App (vis);
});
