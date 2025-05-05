// const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/cloudNotebook";
// const connectToMongo =()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected mongo sucessfully");
//     })
// } 
// module.exports=connectToMongo;
const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/cloudNotebook');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

module.exports = connectToMongo;
