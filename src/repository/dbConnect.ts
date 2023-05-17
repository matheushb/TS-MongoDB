import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://matheus:matheus@userdata.sgdnemh.mongodb.net/users?')

const db = mongoose.connection

export { db }