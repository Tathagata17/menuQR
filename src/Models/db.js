const mongoose = require("mongoose");

const connectdb=()=>{
  mongoose
  .connect(
    "mongodb+srv://somu111725:wpvn7VE2Hnz2jz9s@menuqr.s5jki.mongodb.net/?retryWrites=true&w=majority&appName=MenuQR"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });
}



  module.exports=connectdb;

//wpvn7VE2Hnz2jz9s
//somu111725