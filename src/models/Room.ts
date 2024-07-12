import { model, models, Schema } from "mongoose";

const roomSchema = new Schema({
  title: {
    type: String,
    required: [true, "Room must have a title"],
  },
  description: {
    type: String,
    required: [true, "Room must have a description"],
  },

  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Room must belong to a User!"],
  },
  price: {
    type: Number,
    required: [true, "Room must have a price"],
  },
  maxPeople: {
    type: Number,
    required: [true, "Room must have a maxPeople"],
  },
});

const Room = models.Room || model("Room", roomSchema);
export default Room;
