<<<<<<< HEAD
const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{
            userNewUrlParser: true,
            useUnifiedTopology: true,
            userFindAndModify: false
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)

}catch (err) {
    console.error(err)
    process.exit(1)
}
}
=======

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
>>>>>>> 9bec5c5c467beff627ee1fb540d9d19b64749a4b
