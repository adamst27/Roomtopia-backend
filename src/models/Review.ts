import { model, models, Schema } from "mongoose";

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: [true, "Review must have a rating"],
  },
  comment: {
    type: String,
    required: [true, "Review must have a comment"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a User!"],
  },
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: [true, "Review must belong to a Room!"],
  },
});

const Review = models.Review || model("Review", reviewSchema);
export default Review;
