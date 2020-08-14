import React, { Fragment,useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Button from './components/Button';
//import Redtext from './components/Redtext';
//import InputComponent from './components/InputComponent';
//import { isCompositeComponent } from 'react-dom/test-utils';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import UserPage from './page/UserPage';
import RootPage from './page/RootPage';
import SettingPage from './page/SettingPage';
import LoginPage from './page/LoginPage';

function Navigation(){
  return(
    <Fragment>
       

    </Fragment>
  )
}


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  function handleClickLogin(){
      setIsLoggedIn(true)
  }

  function handleClickLogout(){
    setIsLoggedIn(false)
  }
 
  return (                                                  
  <div className="App">

    <Router>
      <Switch>
        <Route path="/" exact>
          {
            isLoggedIn ? <RootPage onClickLogout={handleClickLogout}/>
            :<Redirect to="/login"/>
          }</Route>

           <Route path="/login" >
           {
            isLoggedIn ? <Redirect to="/"/>
            :<LoginPage onClickLogin={handleClickLogin} />
           }
        </Route>
       
      </Switch>
    </Router>

  </div>
  );
}

export default App;
