const sign = function () {
  app.launch('org.geekbang.geekTime');
  sleep(10000);
  home();
  sleep(5000);
  shell('am force-stop org.geekbang.geekTime', true);
  sleep(10000);
  app.launch('org.geekbang.geekTime');

  iv_close();

  for (let i = 0; i < 3; i++) {
    sleep(5000);
    if (id('rl_icon').exists()) {
      //log(id('rl_icon').findOne());
      id('rl_icon').findOne().click();
      iv_close();
    } else {
      log('极客时间签到失败！');
    }
  }
  function iv_close() {
    sleep(5000);
    if (id('iv_close').exists()) {
      id('iv_close').findOne().click();
    }
  }
  sleep(3000);
  home();
  sleep(3000);
  shell('am force-stop org.geekbang.geekTime', true);
}

module.exports = sign;
