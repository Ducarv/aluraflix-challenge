import express from "express";
import VideoController from "../controller/VideoController.js";

const router = express.Router();

router.get("/videos", VideoController.listVideos);
router.get("/videos/:id", VideoController.listVideosById);
router.get("/videos/title", VideoController.listVideosByTitle);
router.get("/videos/categories/:id", VideoController.listVideosByCategory);
router.post("/videos", VideoController.createVideo);
router.put("/videos/:id", VideoController.updateVideoById);
router.delete("/videos/:id", VideoController.deleteVideoById);

export default router;