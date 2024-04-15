import React from 'react';
import logo from './logo.svg';
import './App.css';

function Nazareno({ display }) {
  return (
    <div className="Nazareno">
      {display}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Nazareno display="hello world" />
      <Nazareno2 />
    </div>
  );
}

function Nazareno2() {
  return (
    <div className="Nazareno2">
      <div className="top">
        <div className="tl">
          <div className="item1">1</div>
          <div className="item2">2</div>
        </div>
        <div className="tr">
          <div className="item3">3</div>
          <div className="item4">4</div>
        </div>
      </div>
      <div className="bottom">
        <div className="bl">
          <div className="item5">5</div>
          <div className="item6">6</div>
        </div>
        <div className="br">
          <div className="item7">7</div>
          <div className="item8">8</div>
        </div>
      </div>
    </div>
  );
}
export default App;