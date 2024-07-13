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
  roomImage: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    required: [true, "Room must have an image"],
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
