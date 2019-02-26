
const express = require('express');

module.exports = function() {
  var router = express.Router();
  router.get('/1.html', function(req, res) {
    // res.send('我是文章').end();
    res.render('./1.ejs', { title: '我是标题', a: 5, b: 7 });
  });
  router.get('/2.html', function(req, res) {
    res.send('我也是文章').end();
  });
  return router;
};