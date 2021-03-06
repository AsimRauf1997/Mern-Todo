const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true 
        })
        console.log(`Database Conneted ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB