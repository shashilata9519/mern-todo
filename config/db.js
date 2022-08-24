const mongoose=require('mongoose');

const db=process.env.MONGO_URL;

const connectdb= async()=>{
    try {
        await mongoose.connect(db);
        console.log('database is connected')
    }catch(err){
        console.log(err.message);

    }
}

module.exports =connectdb;