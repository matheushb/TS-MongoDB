import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const dbLink = <string>process.env.DBLINK;

mongoose.connect(dbLink);

const db = mongoose.connection

export default db;