import React, { useState } from "react";

function App() {

  // defining state variables
const [values, setValues] = useState({
  firstNumber: 0,
  secondNumber: 0,
  mathOperator: "+",
});
const [result, setResult] = useState(0);
// define input handling function
const inputHandler = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  values[name] = value;
  setValues(values);
};
// defining math operating function
const handleMathOperation = () => {
  let mathResult = 0;
  switch (values.mathOperator) {
    case "+":
      mathResult =
        Number(values.firstNumber) + Number(values.secondNumber);
      setResult(mathResult);
      break;
    case "-":
      mathResult =
        Number(values.firstNumber) - Number(values.secondNumber);
      setResult(mathResult);
      break;
    case "*":
      mathResult =
        Number(values.firstNumber) * Number(values.secondNumber);
      setResult(mathResult);
      break;
    case "/":
      mathResult =
        Number(values.firstNumber) / Number(values.secondNumber);
      setResult(mathResult);
      break;
    case "%":
      mathResult =
        Number(values.firstNumber) % Number(values.secondNumber);
      setResult(mathResult);
      break;
  }
};
return(
  <div className="App">
    <br />
    <div>
      <label htmlFor="firstNumber"> First Number: </label>
      <input
        type="number"
        name="firstNumber"
        onChange={inputHandler}
        placeholder="1"
      />
    </div>
    <br />
  
    <div>
      <label htmlFor="mathOperator"> </label>
      <input
        type="text"
        name="mathOperator"
        onChange={inputHandler}
        placeholder="+,-,/,*,%"
      />
    </div>
    <br />
  
    <div>
      <label htmlFor="secondNumber"> Second Number: </label>
      <input
        type="number"
        name="secondNumber"
        onChange={inputHandler}
        placeholder="1"
      />
    </div>
    <div>
      <br />
  
      <button
        type="text"
        onClick={handleMathOperation}
        name="btnMathOperator"
      >
        =
      </button>
    </div>
    <br />
    <div id="result">Result: {result}</div>
  </div>
  );
}

export default App;
