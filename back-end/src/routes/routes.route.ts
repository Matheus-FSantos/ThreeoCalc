import { Router, Response, json } from "express";
import { AuthController } from "../controllers/Auth.controller";
import { CalculationController } from "../controllers/Calculation.controller";
import { AuthMiddleware } from "../middlewares/Auth.middleware";

const router = Router();
const authController: AuthController = new AuthController();
const calculationController: CalculationController = new CalculationController();

router.use(json());
router.post("/calculate", AuthMiddleware, calculationController.calculate);
router.post("/login", authController.login );

export { router as Router };
