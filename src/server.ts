import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./utils/database";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth";
import usersRoute from "./routes/users";
import roomsRoute from "./routes/rooms";
import bookingsRoute from "./routes/bookings";
import reviewsRoute from "./routes/reviews";

const app = express();

const portNo = process.env.PORTNO || 8000;

//setting cors middleware
const corsOptions = {
  origin: true,
  credentials: true,
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("Server is working correctly");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/bookings", bookingsRoute);
app.use("/api/reviews", reviewsRoute);

app.listen(portNo, async () => {
  await connect();
  console.log("Server listening on port " + portNo);
});
