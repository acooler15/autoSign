const work = require('./work');
const devdown = require('./devdown');

console.clear();
for (let key in work) {
  if (work.hasOwnProperty(key) && typeof work[key] == 'function') {
    sleep(5000);
    try {
      work[key]();
    } catch (exception) {
      console.error(exception);
    }
  }
}
// sleep(5000);
// work.unionpay();
devdown();