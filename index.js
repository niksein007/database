const mongoose = require('mongoose')
const UserSchema = require('./models/user')
mongoose.connect(`mongodb+srv://niksein:password123456@cluster0-exkmx.mongodb.net/test?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// const user = new UserSchema({
//     name:'rachael',
//     email:'rachael@gmail.com',
//     password:'superSecretPassword'
// })

// user.save()

UserSchema.find( {name:'bond'},function (err, docs) {
     console.log(docs)
 });

