const sign = function () {
  app.startActivity({
    packageName: 'com.sgcc.wsgw.cn',
    className: 'com.sgcc.wsgw.mainbundle.HomeActivity',
    root: true
  });
  sleep(7000);
  home();
  sleep(3000);
  shell('am force-stop com.sgcc.wsgw.cn', true);
  sleep(3000);
  app.startActivity({
    packageName: 'com.sgcc.wsgw.cn',
    className: 'com.sgcc.wsgw.mainbundle.HomeActivity',
    root: true
  });
  sleep(7000);
  let success = false;
  id("item_house_bottom_integral_tv").find().forEach(child => {
    var target = child.findOne(text('签到'));
    target.click();
    success = true;
    });
  if(!success){
    log('网上国网签到失败');
  }
  sleep(5000);
  home();
  sleep(3000);
  shell('am force-stop com.sgcc.wsgw.cn', true);
}
module.exports = sign;
