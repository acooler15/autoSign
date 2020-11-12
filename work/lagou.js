const sign = function () {
  sleep(3000);
  shell('am force-stop com.lagou.education', true);
  sleep(4000);
  shell('am start "intent:#Intent;component=com.lagou.education/.ui.webview.LagouWebviewActivity;S.router_route_url=lgedu%3A%2F%2Flgedu.com%2Fh5%2Fopen%3FhideTitle%3D1%26url%3Dhttps%253A%252F%252Fkaiwu.lagou.com%252Fuser_growth%252Fcredit.htm%253Ftype%253Dcenter;end"', true);
  sleep(6000);
  if (text('领取').exists()) {
    text('领取').findOne().click();
    sleep(3000);
  } else {
    log('拉勾教育签到失败');
  }
  home();
  sleep(3000);
  shell('am force-stop com.lagou.education', true);
}

module.exports = sign;