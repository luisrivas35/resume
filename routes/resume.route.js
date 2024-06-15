import { Router } from "express";
import { getAbout, getIndex, getExperience, getEducation, getTechs } from "../controllers/resume.controller.js";

const router = Router();

router.get("/", getIndex);
router.get("/about", getAbout);
router.get("/experience", getExperience);
router.get("/education", getEducation);
router.get("/techs", getTechs);


export default router;