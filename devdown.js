const down = function () {
  toast('即将锁屏');
  sleep(3000);
  // 自动亮度
  if (device.getBrightnessMode() == 0) {
    device.setBrightnessMode(1);
  }
  sleep(800);
  // 电源键，锁屏
  shell('am broadcast -a com.jozein.xedgepro.PERFORM -e data 63021302', true);
}

module.exports = down;
