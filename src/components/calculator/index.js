import React, { useState }  from "react";
import "./index.css";

export default function Calculator() {
  const [totalOpsPerform, setTotalOpsPerform] = useState(0);
  const [state, setState] = useState({ input1: '', input2: '', operator: '+', result: ''});


  const handlerReset = () => {
    setTimeout(function(){ setTotalOpsPerform(0); });
    setState({
      input1: '',
      input2: '',
      operator: '+',
      result: '',
    });
  }

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: Number(event.target.value),
    });
  }

  const handleAdd = () => {
    setState({
      ...state,
      operator: '+',
      result: state.input1 + state.input2,
    });
    setTotalOpsPerform(prevVal => prevVal + 1);
  }

  const handleSubstract = () => {
    setState({
      ...state,
      operator: '-',
      result: state.input1 - state.input2,
    });
    setTotalOpsPerform(prevVal => prevVal + 1);
  }

  const handleMultiply = () => {
    setState({
      ...state,
      operator: '*',
      result: state.input1 * state.input2,
    });
    setTotalOpsPerform(prevVal => prevVal + 1);
  }

  const handleDivide = () => {
    setState({
      ...state,
      operator: '/',
      result: state.input1 / state.input2,
    });
    setTotalOpsPerform(prevVal => prevVal + 1);
  }




  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {totalOpsPerform}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40 item-container">
            <input type="number" className="ml-3 mr-3 input" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
            value={state.input1} onChange={handleInputChange} name="input1"/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{state.operator}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3 input"
              value={state.input2} onChange={handleInputChange} name="input2"  placeholder="Eg: 2"/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={handleAdd}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={handleSubstract}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={handleMultiply}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={handleDivide}>/</button>
          </div>

          <div className="layout-row result-block">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={handlerReset}>Reset</button>
            <div className="layout-row result-container">
  {state.result !== '' && (<div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {state.result}</div>)}
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}