import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ( 
    {
        id: {type: String},
        email: {type: String, require: true},
        age: {type: Number, require: true},
        password: {type: String, require: true},
        name: {type: String, require: true},
    }
)

const users = mongoose.model('users', userSchema);

export default users;