const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');

var id = '59c3f604b39bfc1c100433c3';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todos by Id', todo);
}).catch((e) =>{
    console.log(e);
})