const sign = function () {
  app.startActivity({
    packageName: 'com.wxkj.relx.relx',
    className: 'com.relxtech.social.ui.punchcard.PunchCardActivity',
    component: 'com.wxkj.relx.relx/com.relxtech.social.ui.punchcard.PunchCardActivity',
    root: true
  });
  sleep(3000);
  id('recycle_view').findOne().children().forEach(child => {
    let target = child.findOne(id('tv_card'));
    if (target) {
      if (target.text() == '打卡领嗨币') {
        target.click();
      } else {
        log(target.text());
      }
    }
  });
  sleep(3000);
  let result = shell('am force-stop com.wxkj.relx.relx', true);
}

module.exports = sign;