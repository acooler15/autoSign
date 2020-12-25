const work = require('./work/index.js');
const devdown = require('./devdown');

console.clear();
var res = shell('settings get system screen_off_timeout', true);
log('熄屏时间为：%d', res.result);
shell('settings put system screen_off_timeout 2147483647', true);


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
shell('settings put system screen_off_timeout ' + res.result, true);
devdown();
