import mongoose from 'mongoose'
mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.SERVER}/${process.env.DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
)
