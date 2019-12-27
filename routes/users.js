var express = require('express');
var router = express.Router();
const model = require('../models/index');
/* GET users listing. */
router.get('/', function(req, res, next) {
  model.User.findAll({})
  .then((users) => {
    res.json({
      error : false,
      data : users,
      message : 'Users data is here',
    })
  })
  .catch((err) => {
    res.json({
      error : true,
      data : [],
      message : 'Users cannot be retrieved',
    })
  })
});

router.post('/register', (req, res) => {
  const {
      first_name, 
      last_name, 
      email, 
      password,
  } = req.body;
  
  model.User.create({
      first_name : first_name,
      last_name : last_name,
      email : email,
      password : password,
  })
  .then((user) => {
      res.json({
          error : false,
          data : user,
          message : 'User is registered successfully.'
      })
  })
  .catch((err) => {
      res.json({
          error : true,
          data : [],
          message : err,
      })
  })
});

module.exports = router;
