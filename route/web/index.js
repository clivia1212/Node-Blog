const express = require('express');

module.exports = function() {
  var router = express.Router();
  router.get('/', (req, res) => {
    res.send('我是web页面').end();
  });
  return router;
};
