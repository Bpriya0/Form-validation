import React from 'react';
import './App.css';
import Form from './components/Form';
import { Switch, Route } from "react-router-dom";
import FormSuccess from './components/FormSuccess';
import LoginSuccess from './components/LoginSuccess';
import Login  from './components/Login';
import List from './components/List';



function App() {
  return (
    <>
    <Form />
    <Switch>
       
        <Route exact path="/form" component={Form} />
        <Route exact path="/form/success" component={FormSuccess} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/success" component={LoginSuccess} />
        <Route exact path="/List" component={List} />
      </Switch>
  
  </>
  )
}

export default App;
