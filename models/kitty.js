import mongoose from 'mongoose'

const Schema = mongoose.Schema

const kittySchema = new Schema({
  name: {type: String, required: true},
  breed: {type: String, required: true},
  age: {type: Number, required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Kitty = mongoose.model('Kitty', kittySchema)

export {
  Kitty
}