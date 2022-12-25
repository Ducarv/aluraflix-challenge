import express from "express";
import CategoryController from "../controller/CategoryController.js";

const router = express.Router();

router.get("/categories", CategoryController.listCategories);
router.get("/categories/:id", CategoryController.listCategoriesById);
router.post("/categories", CategoryController.createCategories);
router.put("/categories/:id", CategoryController.updateCategoriesById);
router.delete("/categories/:id", CategoryController.removeCategoriesById);

export default router;