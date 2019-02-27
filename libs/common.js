const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX: 'fwedade8UISUDIADs892934kafjdfhafdsS(S*(AHAUFSFSA',

  md5: function(str) {
    var obj = crypto.createHash('md5');

    obj.update(str);

    return obj.digest('hex');
  }
};
