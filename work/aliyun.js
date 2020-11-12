const sign = function () {
  app.launch('com.alibaba.aliyun');
  sleep(5000);
  shell('am start "intent:#Intent;launchFlags=0x10000000;component=com.alibaba.aliyun/.windvane.activity.WindvaneActivity;B.login_=true;S.url_=https%3A%2F%2Fclub.aliyun.com%2Fapp%2Findex.htm;B.KEY_FROM_AROUTER_=true;end"', true);
  sleep(5000);
  if (className('android.view.View').text('每日签到领积分').exists()) {
    className('android.view.View').text('每日签到领积分').findOne().parent().click();
  } else {
    log('Aliyun签到失败！');
  }
  sleep(5000);

  shell('am start "intent:#Intent;action=com.alibaba.aliyun.weex.activity.WXPageActivity;launchFlags=0x10000000;component=com.alibaba.aliyun/.weex.activity.WXPageActivity;S.url_=https%3A%2F%2Fg.alicdn.com%2Faliyun%2Fweex-aliyun-yunqi%2F0.0.29%2Fuser.weex.js%3Fwh_weex%3Dtrue;B.KEY_FROM_AROUTER_=true;end"', true);
  sleep(5000);
  if (className('android.view.View').desc('打卡').exists()) {
    className('android.view.View').desc('打卡').findOne().parent().click();
  } else {
    log('Aliyun打卡失败！');
  }
  // className('android.support.v7.widget.RecyclerView').findOne().children().forEach(child => {
  //   let target = child.findOne(className('android.widget.FrameLayout').clickable(true));
  //   if (target) {
  //     log(target);
  //     target.click();
  //   } else {
  //     log('不存在')
  //   }
  // });
  sleep(3000);
  home();
  sleep(3000);
  shell('am force-stop com.alibaba.aliyun', true);
}

module.exports = sign;