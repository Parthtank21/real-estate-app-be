import { Router } from "express";
import {
  createTenant,
  getTenant,
  updateTenant,
} from "../controllers/tenantControllers";

const router = Router();

router.get("/:cognitoId", getTenant);
router.put("/:cognitoId", updateTenant);
router.post("/", createTenant);

export default router;
