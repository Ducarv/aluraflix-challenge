import express from "express";
import VideoController from "../controller/VideoController.js";

const router = express.Router();

router.get("/videos", VideoController.listVideos);
router.get("/videos/:id", VideoController.listVideosById);
router.post("/videos", VideoController.createVideo);

export default router;