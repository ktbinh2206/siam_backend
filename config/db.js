const mongoose = require("mongoose")

module.exports =  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ticasso:tatung123@cluster0.x5w1r.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.