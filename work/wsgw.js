const sign = function () {
  app.startActivity({
    packageName: 'com.sgcc.wsgw.cn',
    // className: 'com.sgcc.wsgw.cn.activity.AdvertActivity',
    className: 'com.sgcc.wsgw.mainbundle.HomeActivity',
    // className: 'org.zywx.wbpalmstar.engine.EBrowserActivity',
    root: true
  });
  sleep(7000);
  shell('am force-stop com.sgcc.wsgw.cn', true);
  sleep(3000);
  app.startActivity({
    packageName: 'com.sgcc.wsgw.cn',
    // className: 'com.sgcc.wsgw.cn.activity.AdvertActivity',
    className: 'com.sgcc.wsgw.mainbundle.HomeActivity',
    // className: 'org.zywx.wbpalmstar.engine.EBrowserActivity',
    root: true
  });
  sleep(7000);

  if (id('modelMove').exists()) {
    id('modelMove').findOne().child(1).click();
    sleep(5000);
  }
  if (id('im_view_signin').exists()) {
    id('im_view_signin').findOne().click();
    sleep(10000);
  } else {
    log('网上国网签到失败');
  }
  if (className('android.widget.Image').text('rightoff').exists()) {
    className('android.widget.Image').text('rightoff').findOne().click();
  } else {
    log('网上国网签到失败');
  }
  sleep(5000);
  home();
  sleep(3000);
  shell('am force-stop com.sgcc.wsgw.cn', true);
}
module.exports = sign;