import mongoose from "mongoose"


const Schema = mongoose.Schema

const clubSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  addedBy: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  description: {type: String, required: true},
  coffeeShops: [{ type: Schema.Types.ObjectId, ref: 'CoffeeShop' }],

  timeOfDay: {
    type: String,
    required: true,
    enum: ['Morning', 'AfterNoon', 'Evening']
  },

  location: {
    type: String,
    required: true
  },

  members: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
},
  { timestamps: true })

const Club = mongoose.model('Club', clubSchema)

export { Club }