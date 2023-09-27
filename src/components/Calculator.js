import { useState } from 'react';
import PropTypes from 'prop-types';
import Calculate from '../logic/Calculate';

function TheDisplay({ outputVal }) {
  return (
    <div className="display">
      <input
        className="calc-input"
        value={outputVal}
      />
    </div>
  );
}

TheDisplay.propTypes = {
  outputVal: PropTypes.string.isRequired,
};

function Calculator() {
  const [valObj, setValObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const inputValue = e.target.innerText;
    setValObj(Calculate(valObj, inputValue));
  };

  return (
    <>
      <div className="page calc-page">
        <h1 className="page-title">Let&apos;s do some maths!</h1>
        <div className="main-rows">
          <TheDisplay
            outputVal={
              valObj.next ? valObj.next : valObj.total || 0
            }
          />
          <div className="Btn-row">
            <button type="button" className="square" value="AC" onClick={handleClick}>AC</button>
            <button type="button" className="square" value="+/-" onClick={handleClick}>+/-</button>
            <button type="button" className="square" value="%" onClick={handleClick}>%</button>
            <button type="button" className="square orange" value="&divide;" onClick={handleClick}>÷</button>
          </div>
          <div className="Btn-row">
            <button type="button" className="square" value="7" onClick={handleClick}>7</button>
            <button type="button" className="square" value="8" onClick={handleClick}>8</button>
            <button type="button" className="square" value="9" onClick={handleClick}>9</button>
            <button type="button" className="square orange" value="&times;" onClick={handleClick}>x</button>
          </div>
          <div className="Btn-row">
            <button type="button" className="square" value="4" onClick={handleClick}>4</button>
            <button type="button" className="square" value="5" onClick={handleClick}>5</button>
            <button type="button" className="square" value="6" onClick={handleClick}>6</button>
            <button type="button" className="square orange" value="&minus;" onClick={handleClick}>-</button>
          </div>
          <div className="Btn-row">
            <button type="button" className="square" value="1" onClick={handleClick}>1</button>
            <button type="button" className="square" value="2" onClick={handleClick}>2</button>
            <button type="button" className="square" value="3" onClick={handleClick}>3</button>
            <button type="button" className="square orange" value="+" onClick={handleClick}>+</button>
          </div>
          <div className="Btn-row">
            <button type="button" className="square d-width" value="0" onClick={handleClick}>0</button>
            <button type="button" className="square" value="." onClick={handleClick}>.</button>
            <button type="button" className="square orange" value="&#61;" onClick={handleClick}>&#61;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
