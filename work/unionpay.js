const sign = function () {
  app.launch('com.unionpay');
  sleep(8000);
  if (id('frog_float_notgif').exists()) {
    id('frog_float_notgif').findOne().click();
  }
  sleep(10000);
  if (text('立即签到').exists()) {
    let b = text('立即签到').findOne().bounds();
    click(b.centerX(), b.centerY());
  } else {
    log('云闪付签到失败！');
  }
  sleep(3000);
  home();
  sleep(3000);
  shell('am force-stop com.unionpay', true);
}

module.exports = sign;
