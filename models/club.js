import mongoose from "mongoose"


const Schema = mongoose.Schema

const clubSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  coffeeShops: [{ type: Schema.Types.ObjectId, ref: 'CoffeeShop' }],
  timeOfDay: {
    type: String,
    enum: ['Morning', 'AfterNoon', 'Evening']
  },
  members: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
},
  { timestamps: true })

const Club = mongoose.model('Club', clubSchema)

export { Club }