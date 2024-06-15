import { Router } from "express";
import { getAbout, getIndex, getExperience, getEducation } from "../controllers/resume.controller.js";

const router = Router();

router.get("/", getIndex);
router.get("/about", getAbout);
router.get("/experience", getExperience);
router.get("/education", getEducation);
// router.post("/check-login", checkLogin);


export default router;