import express from "express";
import {
  getUser,
  getUserByUsernameOrEmail,
  updateUser,
} from "../controllers/usersController";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.get("/search/:username/:email", getUserByUsernameOrEmail);

export default router;
