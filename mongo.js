const mongoose = require('mongoose')
//const { mongoPath } = require('./config.json')

const mongoPath =
 'mongodb+srv://raymond:YoPqOJM32BjFB8ev@cluster0.w37hc.mongodb.net/testing?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  return mongoose
}