import { model, models, Schema } from "mongoose";

const bookingSchema = new Schema({
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: [true, "Booking must belong to a Room!"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Booking must belong to a User!"],
  },
  price: {
    type: Number,
    required: [true, "Booking must have a price."],
  },
  duration: {
    type: Number,
    required: [true, "Booking must have a duration."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

const Booking = models.Booking || model("Booking", bookingSchema);
export default Booking;
