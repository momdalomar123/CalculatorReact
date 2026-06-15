import { useState } from "react";

import type { NumberString } from "../Types/NumberString";

export default function GridButtons({
  previousNumber,
  setPreviousNumber,
  nextNumber,
  setNextNumber,
  operation,
  setOperation,
  operationPressed,
  setOperationPressed,
  exponentialClick,
  setExponentialClick,
  squareRootPressed,
  setSquareRootPressed,
  errorMessage,
  setErrorMessage,
}: NumberString) {
  console.log(exponentialClick);
  console.log(operationPressed);
  console.log(errorMessage);
  console.log(setErrorMessage);
  const operations = ["+", "-", "/", "*"];
  const [pointFlag, setPointFlag] = useState(false);
  const [clearZeroFlag, setClearZeroFlag] = useState(true);
  const [clearZeroFlagNumber, setClearZeroFlagNumber] = useState(false);
  const [operationConcat, setOperationConcat] = useState(false);

  function addToDisplay(numberString: string) {
    let numberConcat;
    if (!clearZeroFlag && !clearZeroFlagNumber) {
      numberConcat = nextNumber;
      numberConcat = numberConcat + numberString;
    } else {
      numberConcat = numberString;
      setClearZeroFlag(false);
      setClearZeroFlagNumber(false);
    }

    setNextNumber(numberConcat);
  }

  function clearAc() {
    setClearZeroFlag(true);
    setPointFlag(false);
    setOperationPressed(false);
    setExponentialClick(false);
    setSquareRootPressed(false);
    setOperationConcat(false);
    setNextNumber("0");
    setPreviousNumber("0");
    setOperation("");
  }

  function deleteNumberString() {
    if (clearZeroFlag && clearZeroFlagNumber) return;
    let numberSliced = nextNumber.slice(0, nextNumber.length - 1);
    console.log(numberSliced);
    if (!numberSliced) {
      setNextNumber(previousNumber);
      setPreviousNumber("");
      setOperation("");
    } else if (
      numberSliced === operations[0] ||
      numberSliced === operations[1] ||
      numberSliced === operations[2] ||
      numberSliced === operations[3]
    ) {
      console.log("fyt la hon");
      numberSliced = numberSliced.slice(0, numberSliced.length - 1);
      setNextNumber(numberSliced);
    } else {
      setNextNumber(numberSliced);
    }
  }
  function operationHandel(operation: string) {
    if (operationConcat) {
      let operationExecute;
      console.log(nextNumber);
      if (previousNumber !== "0" && previousNumber !== "") {
        console.log(previousNumber);
        console.log(nextNumber);

        const firstNumber = Number(previousNumber);
        const secondNumber = Number(nextNumber);
        if (firstNumber && !secondNumber) {
          if (squareRootPressed) {
            console.log("SquareRootFyt");
            operationExecute = Math.sqrt(firstNumber);
            setPreviousNumber(String(operationExecute))
            setSquareRootPressed(false);
          }
        } else if (firstNumber && secondNumber) {
          console.log(squareRootPressed);
          if (exponentialClick) {
            operationExecute = Math.pow(firstNumber, secondNumber);
            setExponentialClick(false);
          } else if (operation === "+") {
            setExponentialClick(false);
            operationExecute = firstNumber + secondNumber;
          } else if (operation === "-") {
            setExponentialClick(false);
            operationExecute = firstNumber - secondNumber;
          } else if (operation === "*") {
            setExponentialClick(false);
            operationExecute = firstNumber * secondNumber;
          } else if (operation === "/") {
            setExponentialClick(false);
            operationExecute = firstNumber / secondNumber;
          } else if (operation === "^") {
            operationExecute = Math.pow(firstNumber, secondNumber);
          } else if (operation === "√") {
            setExponentialClick(false);
            operationExecute = Math.sqrt(firstNumber);
          }
          setPreviousNumber(String(operationExecute));
        }
      } else {
        setPreviousNumber(nextNumber);
      }
    } else {
      setPreviousNumber(nextNumber);
    }
    setOperation(operation);
    setOperationConcat(false);
    setSquareRootPressed(false);
    setNextNumber("0");
    setClearZeroFlag(true);
  }
  function computeOperation() {
    if (operation) {
      let operationExecute;
      const firstNumber = Number(previousNumber);
      const secondNumber = Number(nextNumber);
      switch (operation) {
        case "+": {
          operationExecute = firstNumber + secondNumber;
          break;
        }
        case "-": {
          operationExecute = firstNumber - secondNumber;
          break;
        }
        case "*": {
          operationExecute = firstNumber * secondNumber;
          break;
        }
        case "/": {
          if (nextNumber === "0") break;
          else {
            operationExecute = firstNumber / secondNumber;
          }
          break;
        }
        case "^": {
          operationExecute = Math.pow(firstNumber, secondNumber);
          break;
        }
        case "√": {
          operationExecute = Math.sqrt(firstNumber);
          break;
        }
        default: {
          break;
        }
      }
      setExponentialClick(false);
      setSquareRootPressed(false);
      setClearZeroFlagNumber(true);
      setOperationPressed(false);
      setPreviousNumber("");
      setOperation("");
      setNextNumber(String(operationExecute));
    }
  }
  return (
    <div
      className="grid grid-cols-4 text-3xl text-white gap-3 mt-2
      max-[400px]:w-80 px-5 *:flex *:justify-center *:items-center *:rounded-2xl *:h-16  *:border *:border-solid *:backdrop-blur-xl *:bg-white/30 
    *:transition-all 
    *:hover:scale-105 *:hover:shadow-[5px_5px_1px_0px_rgba(255,255,255,0.2)] *:select-none *:active:scale-90"
    >
      <button
        className="bg-amber-300! col-span-3 cursor-pointer hover:bg-amber-400!"
        onClick={() => {
          clearAc();
        }}
      >
        AC
      </button>

      <button
        className="cursor-pointer px-2 bg-red-300! hover:bg-red-400!"
        onClick={() => {
          deleteNumberString();
        }}
      >
        Del
      </button>
      <button
        className="col-span-2 cursor-pointer bg-zinc-400! hover:bg-zinc-500!"
        onClick={() => {
          operationHandel("^");
          setExponentialClick(true);
          setOperationConcat(true);
        }}
      >
        ^
      </button>
      <button
        className="cursor-pointer bg-zinc-400! hover:bg-zinc-500!"
        onClick={() => {
          operationHandel("√");
          setSquareRootPressed(true);
          setOperationConcat(true);
        }}
      >
        √
      </button>
      <button
        className="cursor-pointer bg-zinc-400! hover:bg-zinc-500!"
        onClick={() => {
          operationHandel("/");
          setOperationConcat(true);
          setOperationPressed(true);
        }}
      >
        /
      </button>
      <button
        className="cursor-pointer  "
        onClick={() => {
          addToDisplay("1");
        }}
      >
        1
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("2");
        }}
      >
        2
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("3");
        }}
      >
        3
      </button>
      <button
        className="cursor-pointer bg-zinc-400! hover:bg-zinc-500!"
        onClick={() => {
          operationHandel("+");
          setOperationPressed(true);
          setOperationConcat(true);
        }}
      >
        +
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("4");
        }}
      >
        4
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("5");
        }}
      >
        5
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("6");
        }}
      >
        6
      </button>
      <button
        className="cursor-pointer bg-zinc-400! hover:bg-zinc-500!"
        onClick={() => {
          operationHandel("-");
          setOperationConcat(true);
          setOperationPressed(true);
        }}
      >
        -
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("7");
        }}
      >
        7
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("8");
        }}
      >
        8
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("9");
        }}
      >
        9
      </button>
      <button
        className="cursor-pointer bg-zinc-400!
      hover:bg-zinc-500!
      "
        onClick={() => {
          operationHandel("*");
          setOperationConcat(true);
          setOperationPressed(true);
        }}
      >
        *
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          addToDisplay("0");
        }}
      >
        0
      </button>
      <button
        className="cursor-pointer "
        onClick={() => {
          if (operationConcat && pointFlag) {
            setPointFlag(false);
            console.log("operationConcat");
          }
          if (!pointFlag || operationConcat) {
            setPointFlag(true);
            setOperationConcat(false);
            addToDisplay(".");
            console.log("pointFlag");
          }
        }}
      >
        .
      </button>

      <button
        className="col-span-2 bg-blue-300!
      hover:bg-blue-400! cursor-pointer"
        onClick={() => {
          computeOperation();
        }}
      >
        =
      </button>
    </div>
  );
}
