const sign = function () {
  app.launch('com.alibaba.aliyun');
  sleep(8000);
  shell('am start "intent:#Intent;action=com.alibaba.aliyun.windvane.activity.WindvaneActivity;launchFlags=0x10000000;component=com.alibaba.aliyun/.windvane.activity.WindvaneActivity;B.login_=true;S.title_=%E6%88%91%E7%9A%84%E7%A7%AF%E5%88%86;S.url_=https%3A%2F%2Fclub.aliyun.com%2F;B.KEY_FROM_AROUTER_=true;end"', true);
  sleep(15000);
  if (text('赚积分').exists()) {
    toast('赚积分');
    console.log(text('赚积分').findOne());
    text('赚积分').findOne().click();
    sleep(8000);
  }

  if (className('android.widget.Button').text('签到领积分').exists()) {
    className('android.widget.Button').text('签到领积分').findOne().click();
    sleep(15000);
  } else {
    log('Aliyun签到失败！');
  }
  if (className('android.widget.Button').text('点击抽奖').exists()) {
    className('android.widget.Button').text('点击抽奖').findOne().click();
    sleep(10000);
  }
  if (id('mobile-lotttery').exists()) {
    id('mobile-lotttery').findOne().child(0).child(2).child(2).click();
  }

  sleep(5000);

  shell('am start "intent:#Intent;action=com.alibaba.aliyun.weex.activity.WXPageActivity;launchFlags=0x10000000;component=com.alibaba.aliyun/.weex.activity.WXPageActivity;S.url_=https%3A%2F%2Fg.alicdn.com%2Faliyun%2Fweex-aliyun-yunqi%2F0.0.29%2Fuser.weex.js%3Fwh_weex%3Dtrue;B.KEY_FROM_AROUTER_=true;end"', true);
  sleep(5000);
  if (className('android.view.View').desc('打卡').exists()) {
    className('android.view.View').desc('打卡').findOne().parent().click();
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
