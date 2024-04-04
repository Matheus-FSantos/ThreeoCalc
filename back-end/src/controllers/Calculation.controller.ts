import { Response } from "express";
import { TypedRequest } from "../interfaces/TypedRequests.interfaces";
import { CalculationService } from "../services/Calculation.service";
import { ThreeoCalcExceptions } from "../interfaces/Exceptions.interface";
import { CalculationRequestBodyDTO, CalculationRequestQueryDTO } from "../models/Calculation.model";

export class CalculationController {
  constructor(private readonly calculationService: CalculationService){ }
  
  calculate = (request: TypedRequest<CalculationRequestQueryDTO, CalculationRequestBodyDTO>, response: Response) => {
    const param: string = request.query.operation;
    const body: CalculationRequestBodyDTO = {
      firstNumber: request.body.firstNumber,
      secondNumber: request.body.secondNumber
    };

    try {
      const total = this.calculationService.calculate(param, body);
      response.status(200).json({ total });
    } catch(error) {
      if(error instanceof ThreeoCalcExceptions)
        response.status(422).json(error);
      else
        response.status(500).json(error);
    }
  }

}
