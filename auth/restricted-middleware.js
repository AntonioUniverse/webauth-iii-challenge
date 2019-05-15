const jwt = require('jsonwebtoken')
const secrets = require('../config/secret')

module.exports = (req, res, next) => {
    // tokens are set as the authorization header
    const token = req.headers.authorization
  
    if (token) {
      jwt.verify(token,secrets.jwtSecret,(err, decodedtoken) => {
        if(err){
        //if error token not valid
         res.status(401).json({message: "oh no try it again"})
        }
        else {
          //token is valid and was able to be decoded
          req.decodedJwt = decodedtoken //will make it available to the rest of the api. 
          console.log("decode jwt", req.decodedJwt)
  
          next();
        }
      })
    }
    else{
      res.status(401).json({message: " you shall not pass"})
    }
  };