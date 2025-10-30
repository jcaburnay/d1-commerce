import '../scss/main.scss';

class App {
  constructor() {
    this.init();
  }

  init() {
    console.log('D1 Commerce App initialized');
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM ready');
    });
  }
}

new App();

if (module.hot) {
  module.hot.accept();
}
