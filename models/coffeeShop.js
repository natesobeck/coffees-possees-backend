import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  price: {
    type: Number, default: 5
  },
  rating: {
    type: Number, default: 5
  },
  wifi: {
    type: Number, default: 5
  },
  coffeeShopAmbience: {
    type: String,
    enum: ['Spacious', 'Cozy', 'Loud', 'Relaxing', 'Quiet']
  },
  addedBy: { type: Schema.Types.ObjectId, ref: 'Profile' }
}, { timestamps: true })


const coffeeShopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  location: { type: String },
  addedBy: { type: Schema.Types.ObjectId, ref: 'Profile' },
  clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }],
  reviews: [reviewSchema]
})


const CoffeeShop = mongoose.model("CoffeeShop", coffeeShopSchema)

export { CoffeeShop }