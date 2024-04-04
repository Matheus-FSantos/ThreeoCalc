import { ThreeoCalcExceptions } from "../../interfaces/Exceptions.interface";

export class OperationValidation {
  
	validate = (param: string): void => {
    if(!["addition", "subtraction", "multiply", "division"].includes(param))
      throw new ThreeoCalcExceptions("Invalid operation. Example of valid operations: addition, subtraction, multiplication and division", "You called the method to calculate 2 numbers, but entered an invalid operation option, please enter a valid option. Valid options are: addition, subtraction, multiplication, division");
  }

}
