import { Router } from "express";
import {
  getProperties,
  getProperty,
  createProperty,
} from "../controllers/propertyController";
import { authMiddleware } from "../middlewares/authMiddleware";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post(
  "/",
  authMiddleware(["managet"]),
  upload.array("photos"),
  createProperty
);

export default router;
