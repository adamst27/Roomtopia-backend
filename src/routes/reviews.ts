import express from "express";
import {
  createReview,
  deleteReview,
  getReview,
  getReviewsByRoom,
  getReviewsByUser,
  updateReview,
} from "../controllers/reviewsController";

const router = express.Router();

router.post("/", createReview);
router.get("/:id", getReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);
router.get("/room/:id", getReviewsByRoom);
router.get("/user/:id", getReviewsByUser);

export default router;
