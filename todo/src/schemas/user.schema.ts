import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.schema({
    id: String,
    name: String,
    email: String,
    password: String,
});
