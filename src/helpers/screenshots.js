const { run } = require('react-snap');

run({
  source: 'dist',
  destination: 'screenshots/',
  saveAs: 'png',
  viewport: {
    width: 1920,
    height: 1080
  }
});
