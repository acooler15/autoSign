const work = require('./work');
const devdown = require('./devdown');

for (let key in work) {
  if (work.hasOwnProperty(key) && typeof work[key] == 'function') {
    sleep(5000);
    work[key]();
  }
}
// sleep(5000);
// work.unionpay();
devdown();