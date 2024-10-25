// mongodb+srv://sveeramani:<db_password>@ecom.jsqco.mongodb.net/

import mongoose from "mongoose"

const connectDB = async() => {
     
    try{

        const connect =  await mongoose.connect("mongodb+srv://sveeramani:Veeramani123@ecom.jsqco.mongodb.net/ecom")
        
        console.log(`MongoDB Connected Successfully`);

    }catch(err){

        console.log(`Error Message ${err.message}`);
        process.exit(1);

    }
};

export default connectDB;