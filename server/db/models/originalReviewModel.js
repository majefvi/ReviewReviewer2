const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const randomMongoose = require("mongoose-simple-random");

const reviewSchema = new Schema({
  product_id: String,
  product_category: String,
  review: String,
  star_rating: Number,
});

reviewSchema.plugin(randomMongoose);

module.exports = mongoose.model("OriginalReview", reviewSchema, "amzlReviews");
