import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ( 
    {
        id: {
            type: String
        },
        email: {
            type: String,
            require: true,
            lowercase: true,
            unique: true,
            trim: true,
            validate: {
                validator: (str: string) => str.indexOf('@') !== -1,
                message: (props: any) => `${props.value} is not a valid email.`
            }
        },
        age: {
            type: Number,
            require: true,
            min: 1,
            max: 100,
        },
        password: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true,
            trim: true
        },
    },
    {
        versionKey: false
    }
)

const users = mongoose.model('users', userSchema);

export default users;