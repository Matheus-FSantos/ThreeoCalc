export interface IThreeoCalcExceptions {
  messages: string | string[],
  description: string
}

export class ThreeoCalcExceptions implements IThreeoCalcExceptions {
  constructor(public messages: string | string[], public description: string) {}
}