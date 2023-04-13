var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:name/:age/:sex', function(req, res, next) {
  var user = {
    name: req.params.name,
    age: req.params.age,
    sex: req.params.sex
  };
  res.json(user);
});

module.exports = router;
