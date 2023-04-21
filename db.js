const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/oxy_book?directConnection=true&tls=false&readPreference=primary";
const mongoURI="mongodb+srv://amit:amit1702@cluster0.sbo3mbm.mongodb.net/organangel"
// const mongoURI="mongodb+srv://somu:sg334s22@cluster0.mvf57zm.mongodb.net/oxy_books?retryWrites=true&w=majority"
const connectToMongoose=()=>{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },()=>{
        console.log("connected")
      })
} 
module.exports = connectToMongoose; 