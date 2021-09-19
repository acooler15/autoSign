const work = require('./work');
const devdown = require('./devdown');

console.clear();
var res = shell('settings get system screen_off_timeout', true);
log('熄屏时间为：%d', res.result);
shell('settings put system screen_off_timeout 2147483647', true);

sleep(5000);
work.unionpay()
//work.wsgw()
toast("签到完毕")

shell('settings put system screen_off_timeout ' + res.result, true);
