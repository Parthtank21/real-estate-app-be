import { Router } from "express";
import { createManager, getManager } from "../controllers/managerController";

const router = Router();

router.get("/:cognitoId", getManager);
router.post("/", createManager);

export default router;
