import { Router } from "express";
import {
  createManager,
  getManager,
  getManagerProperties,
  updateManager,
} from "../controllers/managerController";

const router = Router();

router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.get("/:cognitoId/properties", getManagerProperties);
router.post("/", createManager);

export default router;
