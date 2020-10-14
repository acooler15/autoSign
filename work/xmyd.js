const sign = function () {
  app.startActivity({
    packageName: 'com.duokan.reader',
    className: 'com.duokan.reader.DkMainActivity',
    root: true
  });
  sleep(3000);
  id('surfing__surfing_navigate_view__personal').findOne().click();
  sleep(2000);
  id('personal__main__user_info_sign_in').findOne().click();

  sleep(3000);
  home();
  sleep(3000);
  shell('am force-stop com.duokan.reader', true);

}

module.exports = sign;