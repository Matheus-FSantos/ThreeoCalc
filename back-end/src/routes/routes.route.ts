import { Router, json } from "express";
import { AuthService } from "../services/Auth.service";
import { UsersService } from "../services/Users.service";
import { AuthMiddleware } from "../middlewares/Auth.middleware";
import { AuthController } from "../controllers/Auth.controller";
import { UsersRepository } from "../repositories/Users.repository";
import { CalculationService } from "../services/Calculation.service";
import { NumbersValidation } from "../utils/validation/Numbers.validation";
import { CalculationController } from "../controllers/Calculation.controller";
import { OperationValidation } from "../utils/validation/Operation.validation";

const router: Router = Router();

const authMiddleware: AuthMiddleware = new AuthMiddleware();

const usersRepository: UsersRepository = new UsersRepository();
const usersService: UsersService = new UsersService(usersRepository); 
const authService: AuthService = new AuthService(usersService);
const authController: AuthController = new AuthController(authService);

const numberValidation: NumbersValidation = new NumbersValidation();
const operationValidation: OperationValidation = new OperationValidation();
const calculationService: CalculationService = new CalculationService(operationValidation, numberValidation);
const calculationController: CalculationController = new CalculationController(calculationService);

router.use(json());
router.post("/calculate", authMiddleware.middleware, calculationController.calculate);
router.post("/login", authController.auth);

export { router as Router };
