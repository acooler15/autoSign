const sign = function () {
  app.launch('com.unionpay');
  sleep(5000);
  if (id('tv_tab_name').exists() && text('我的').exists()) {
    let bounds = id('tv_tab_name').find().findOne(text('我的')).parent().bounds()
    click(bounds.centerX(), bounds.centerY());
    sleep(3000);
    id('iv_sign_in_down').findOne().click();
  }

  sleep(10000);
  if (text('立即签到').exists()) {
    let b = text('立即签到').findOne().bounds();
    click(b.centerX(), b.centerY());
  } else {
    log('云闪付签到失败');
  }
  sleep(3000);
  home();
  sleep(3000);
  shell('am force-stop com.unionpay', true);
}

module.exports = sign;
