const sign = function () {
  app.startActivity({
    packageName: 'com.chaozh.iReaderFree',
    className: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
    data: 'https://ah2.zhangyue.com/zycl/newsign/index?launch=newpage&needAppendArg=0',
    root: true

  });
  sleep(13000);
  if (id("sign").exists()) {
    id("sign").findOne().click();
    sleep(5000);
  }

  if (text('免费抽奖').exists()) {
    text('免费抽奖').findOne().parent().click();
    for (let i = 0; i < 3; i++) {
      sleep(5000);
      if (id('start').exists()) {
        id('start').findOne().click();
        sleep(5000);
        if (id('mask').exists()) {
          id('mask').findOne().child(0).child(1).click();
        }

      } else {
        log('ireader第%d次抽奖失败！', i + 1);
      }
    }
    //text('免费抽奖').parent().click();
  } else {
    log('未找到ireader抽奖！')
  }
  // });
  home();
  sleep(3000);
  shell('am force-stop com.chaozh.iReaderFree', true);
}
const sign_card = function () {
  if (id('sign-card-wrap').exists()) {
    id('sign-card-wrap').findOne().children()
      .forEach(function (child) {
        if (child.indexInParent() == 4) {
          child.click();
        }
      });
    sleep(5000);
  }
  if (textContains('中奖了').exists()) {
    textContains('中奖了').findOne().parent().parent().parent().child(0).click();
    sleep(3000);
  }
}
module.exports = sign;