import { CalculationRequestBodyDTO } from "../interfaces/Calculation.interface";

import { NumbersValidation } from "../utils/validation/Numbers.validation";
import { OperationValidation } from "../utils/validation/Operation.validation";

export class CalculationService {

  private operationValidation = new OperationValidation();
  private numbersValidation = new NumbersValidation();

  calculate = (param: string, body: CalculationRequestBodyDTO): string => {
    let total: number = 0;
  
    this.operationValidation.validate(param);
    this.numbersValidation.validate(body);

    switch (param) {
      case "addition":
        total = body.firstNumber + body.secondNumber;
        break;
      case "subtraction":
        total = body.firstNumber - body.secondNumber;
        break;
      case "multiply":
        if(body.firstNumber !== 0 || body.secondNumber !== 0)
          total = body.firstNumber * body.secondNumber;
        break;
      case "division":
        if(body.firstNumber !== 0 && body.secondNumber !== 0)
          total = body.firstNumber /body.secondNumber;
        break;
    }

    return total.toFixed(2);
  }
}
