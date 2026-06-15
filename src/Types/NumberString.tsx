export type  NumberString = {
  previousNumber: string;
  setPreviousNumber: (value: string) => void;
  nextNumber: string;
  operation: string;
  setOperation: (value: string) => void;
  setNextNumber: (value: string) => void;
  operationPressed: boolean;
  setOperationPressed: (value: boolean) => void;
  exponentialClick: boolean;
  setExponentialClick: (value: boolean) => void;
  squareRootPressed: boolean;
  setSquareRootPressed: (value: boolean) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
};