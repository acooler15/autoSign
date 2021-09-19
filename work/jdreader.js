const sign = function () {
  app.launch('com.jd.app.reader');
  sleep(8000);
  shell('am start "intent:#Intent;component=com.jd.app.reader/com.jingdong.app.reader.psersonalcenter.activity.PersonalSignInWebActivity;S.title_name=%E6%B4%BB%E5%8A%A8%E4%B8%AD%E5%BF%83;S.url=https%3A%2F%2Fjdread-api.jd.com%2Fh5%2Fp_sign_in%3FeventFrom%3D1;end"',true)
  sleep(5000);
  home();
  sleep(3000);
  shell('am force-stop com.jd.app.reader', true);
}

module.exports = sign;
