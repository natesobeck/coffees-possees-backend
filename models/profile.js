import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }],
  coffeeShops: [{ type: Schema.Types.ObjectId, ref: 'CoffeeShop' }]
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
