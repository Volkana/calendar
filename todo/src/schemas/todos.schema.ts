import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    initialDate: Date,
    finalDate: Date,
});
