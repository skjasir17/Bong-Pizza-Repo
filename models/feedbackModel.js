
const mongoose=require('mongoose');
const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    rating: {  // ⭐ New field for star rating
        type: Number,
        required: true,
        min: 1, // Minimum rating (1 star)
        max: 5  // Maximum rating (5 stars)
    },
    createdAt: { // 📅 Timestamp for sorting reviews
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('review',reviewSchema);