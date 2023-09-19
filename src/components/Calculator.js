import TheScreen from './Screen';

function Btn(prop) {
  const { name } = prop;
  return (
    <button type="button" className="square">
      { name }
    </button>
  );
}

function BtnSign(prop) {
  const { name } = prop;
  return (
    <button type="button" className="square orange">
      { name }
    </button>
  );
}

function BtnZero(prop) {
  const { name } = prop;
  return (
    <button type="button" className="square d-width">
      { name }
    </button>
  );
}

function Calculator() {
  return (
    <div className="main-rows">
      <TheScreen />
      <div className="Btn-row">
        <Btn value="AC" name="AC" />
        <Btn value="+/-" name="+/-" />
        <Btn value="%" name="%" />
        <BtnSign className="dot" value="/" name="&divide;" />
      </div>
      <div className="Btn-row">
        <Btn value="7" name="7" />
        <Btn value="8" name="8" />
        <Btn value="9" name="9" />
        <BtnSign value="x" name="x" />
      </div>
      <div className="Btn-row">
        <Btn value="4" name="4" />
        <Btn value="5" name="5" />
        <Btn value="6" name="6" />
        <BtnSign value="-" name="-" />
      </div>
      <div className="Btn-row">
        <Btn value="1" name="1" />
        <Btn value="2" name="2" />
        <Btn value="3" name="3" />
        <BtnSign value="+" name="+" />
      </div>
      <div className="Btn-row">
        <BtnZero value="0" name="0" />
        <Btn value="&#729;" name="&middot;" />
        <BtnSign value="&#61;" name="&#61;" />
      </div>
    </div>
  );
}

export default Calculator;
