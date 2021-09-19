const sign = function () {
  app.launch('com.sgcc.wsgw.cn');
  sleep(20000);
  home();
  sleep(3000);
  shell('am force-stop com.sgcc.wsgw.cn', true);
  sleep(6000);
  app.launch('com.sgcc.wsgw.cn');
  sleep(20000);
  let success = false;
  id("item_house_bottom_integral_tv").find().forEach(child => {
    var target = child.findOne(text('签到'));
    target.click();
    success = true;
    });

//   try {
//     if(id("sin_tag").exists()){

//         toast("存在按钮");

//         var widget = id("sin_tag").findOne();
//         click(widget.bounds().centerX(), widget.bounds().centerY());
//         success = true;
//     }
//   } catch (e) {
//       toast(e);
//   }
  if(!success){
    log('网上国网签到失败');
  }
  sleep(5000);
  home();
  sleep(3000);
  shell('am force-stop com.sgcc.wsgw.cn', true);
}
module.exports = sign;
