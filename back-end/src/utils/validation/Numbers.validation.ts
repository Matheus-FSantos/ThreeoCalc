import { ThreeoCalcExceptions } from "../../interfaces/Exceptions.interface";
import { CalculationRequestBodyDTO } from "../../models/Calculation.model";

export class NumbersValidation {

  validate = (numbers: CalculationRequestBodyDTO): void => {
    const messages: string[] = new Array();

    if(numbers.firstNumber == null || numbers.firstNumber == undefined) messages.push("The FIRST NUMBER must not be blank.");
    if(numbers.secondNumber == null || numbers.secondNumber == undefined) messages.push("The SECOND NUMBER must not be blank.");

    if(messages.length > 0)
      throw new ThreeoCalcExceptions(messages, "Invalid values ​​were entered to perform the calculation.");
  }

}
