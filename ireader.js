const sign = function() {
    app.startActivity({
        packageName: 'com.chaozh.iReaderFree',
        className: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
        data: 'https://ah2.zhangyue.com/zycl/sign/index?ca=Welfare.Index&launch=newpage&needAppendArg=0',
        root: true

    });
    sleep(8000);
    if (id("sign").exists()) {
        id("sign").findOne().click();
        sleep(5000);
    }

    if (id('sign-card-wrap').exists()) {
        id('sign-card-wrap').findOne().children()
            .forEach(function(child) {
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

    if (text('免费抽奖').exists()) {
        //  console.show();
        //  console.log(text('免费抽奖').findOne().parent())
        text('免费抽奖').findOne().parent().click();
        for (let i = 0; i < 3; i++) {
            sleep(5000);
            if (id('start').exists()) {
                log(id('start').findOne())
                id('start').findOne().click();
                sleep(5000);
                if (id('mask').exists()) {
                    id('mask').findOne().child(0).child(1).click();
                }

            }
        }
        //text('免费抽奖').parent().click();
    }
    // });
    home();
    sleep(3000);
    shell('am force-stop com.chaozh.iReaderFree', true);
}

module.exports = sign;