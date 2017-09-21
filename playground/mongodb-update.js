//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59c3328c26fe78a2bda3995b')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59c2abe5e8a5b30a2883c284')
    },{
        $set:{
            name: "Akash"
        },
        $inc:{
            age:1//increment age by one
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })


    //db.close();
});