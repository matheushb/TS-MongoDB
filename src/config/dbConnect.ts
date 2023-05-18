import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const dbLink = <string>process.env.DBLINK;
    
mongoose.connect(dbLink).catch(err => {console.log(err.mongoParseError)});

const db = mongoose.connection

export default db;