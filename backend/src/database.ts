import mongoose from 'mongoose'
import { isJSDocAugmentsTag } from 'typescript'


export async function startConnection(){

    //Accedim a la BBDD que tenim
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/Minim1',{ 
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Connection with DATABASE (minim1BBDD) established')
}