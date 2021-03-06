const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secrets = require('../config/secret')
const Users = require('../user/user-model')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)
          res.status(200).json({
            message: `Welcome ${user.username}!  You have a token...`, token
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  // making a token 
  function generateToken(user) {
  const payload = {
    subject:user.id, // this is what the token is about. it's about the users id
    username: user.username,
    department:user.department //this puts the role on the token.  this would normally come from the database
  
  }
  
  const options = {
    expiresIn: "1d",
  }
  return jwt.sign(payload,secrets.jwtSecret,options) // this method runs in order
  }
  module.exports = router;