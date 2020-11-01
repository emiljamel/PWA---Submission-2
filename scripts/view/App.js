import URLParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
  constructor({ button, content }) {
    this.button = button;
    this.content = content;
  }

  async renderPage() {
    const url = URLParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;