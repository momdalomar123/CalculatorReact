import { useState } from "react";
import "./App.css";
import GridButtons from "./Components/GridButtons";
import OutputCalc from "./Components/OutputCalc";

function App() {
  const [previousNumber, setPreviousNumber] = useState("0");
  const [nextNumber,setNextNumber]=useState("0")
  const [operationPressed, setOperationPressed] = useState(false);
  const [exponentialClick, setExponentialClick] = useState(false);
  const [squareRootPressed,setSquareRootPressed] = useState(false);
  const [operation,setOperation]=useState("")
  const [errorMessage,setErrorMessage]=useState("")

  return (
    <>
      <div className=" rounded-2xl bg-white/20 pb-3 px-3 pt-3 flex flex-col justify-center max-[400px]:items-center shadow-[7px_7px_4px_0_rgba(255,255,255,0.2)]">
        <OutputCalc
          previousNumber={previousNumber}
          nextNumber={nextNumber}
          operationPressed={operationPressed}
          exponentialClick={exponentialClick}
          operation={operation}
          squareRootPressed={squareRootPressed}
          
        />
        <GridButtons
          previousNumber={previousNumber}
          setPreviousNumber={setPreviousNumber}
          nextNumber={nextNumber} 
          setNextNumber={setNextNumber}
          operation={operation}
          setOperation={setOperation}
          operationPressed={operationPressed}
          setOperationPressed={setOperationPressed}
          exponentialClick={exponentialClick}
          setExponentialClick={setExponentialClick}
          squareRootPressed={squareRootPressed}
          setSquareRootPressed = {setSquareRootPressed}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </>
  );
}

export default App;
