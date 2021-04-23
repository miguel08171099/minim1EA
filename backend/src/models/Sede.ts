import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

const schema = new Schema({
    nombreSede: String,
    localizacion: Number,
    poblacion: String
});

interface ISede extends Document {
    nombreSede: String,
    localizacion: Number,
    poblacion: String
};

export default model<ISede>('Sede',schema);