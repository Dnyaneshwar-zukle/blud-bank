const mongoose = require(`mongoose`)
const colors = require(`colors`)
const { connect } = require('../routers/testRoutes')


const connectDB = async () =>{
   try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To MongoBD Database ${mongoose.connection.host}`.bgBlack.white);
   } catch (error) {
    console.log(`MongoDB Database Error ${error}`.bgRed.white);
   }
}

module.exports = connectDB