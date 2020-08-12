import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Redtext from './components/Redtext';
import InputComponent from './components/InputComponent';
//import { isCompositeComponent } from 'react-dom/test-utils';


function App() {
  return (                                                  
  <div className="App">
  
    <Button text="dicky">
      <Redtext>
        Ricky
      </Redtext>
      
      </Button>
      <InputComponent/>
  </div>
  );
}

export default App;
