const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');

// remove() //works like find() and deletes all when {} is passed
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '59c49501e7d23d2c1248c7d4'}).then((todo) => {
    console.log(todo);
})

Todo.findByIdAndRemove('59c5fa7b7ab6f8ac0f709d77').then((todo) => {
    console.log(todo);
})