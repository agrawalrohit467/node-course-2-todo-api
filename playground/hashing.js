// const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const data ={
    id: 10
}

var token = jwt.sign(data,'123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

// var message = "I am Rohit"
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);