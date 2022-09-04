import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react';

function App(props) {

  let textInput = useRef(null);

  props.websocket.onmessage = function (evt) {
    console.log(evt);
  };
  
  const sendMessage = () => {
    props.websocket.send(textInput.current.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type={"text"} ref={textInput} />
        <input type={"button"} id="enviaEsaWea" onClick={() => sendMessage()} defaultValue="Enviar" />
      </header>
    </div>
  );
}

export default App;
