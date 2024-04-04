export interface CalculationRequestQueryDTO {
  [key: string]: string
  operation: string
}

export interface CalculationRequestBodyDTO {
  firstNumber: number
  secondNumber: number 
}
