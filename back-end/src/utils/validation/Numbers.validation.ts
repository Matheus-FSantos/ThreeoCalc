import { CalculationRequestBodyDTO } from "../../interfaces/Calculation.interface";
import { ThreeoCalcExceptions } from "../../interfaces/Exceptions.interface";

export class NumbersValidation {

  validate = (numbers: CalculationRequestBodyDTO): void => {
    const messages: string[] = new Array();

    if(numbers.firstNumber == null || numbers.firstNumber == undefined) messages.push("The FIRST NUMBER must not be blank.");
    if(numbers.secondNumber == null || numbers.secondNumber == undefined) messages.push("The SECOND NUMBER must not be blank.");

    if(messages.length > 0)
      throw new ThreeoCalcExceptions(messages, "Invalid values ​​were entered to perform the calculation.");
  }

}
