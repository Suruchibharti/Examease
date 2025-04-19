import mongoose from 'mongoose'

    const Connection=async ()=>{
    const URL=`mongodb://education:education123@ac-ocravo9-shard-00-00.mxhzlac.mongodb.net:27017,ac-ocravo9-shard-00-01.mxhzlac.mongodb.net:27017,ac-ocravo9-shard-00-02.mxhzlac.mongodb.net:27017/?ssl=true&replicaSet=atlas-s1yls6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try {
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log("database connected successfully to server ..");
    } catch (error) {
        console.log("error while connecting database");
    }
}

export default Connection;