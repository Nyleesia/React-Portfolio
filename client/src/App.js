import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Head from './components/header.component';
import Foot from './components/footer.component';
import Home from './components/homePage.component';
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 
  render(){
    return(

        <Router className = "app">
        <Head/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/projects" component = {Projects} />
        <Route exact path = "/contact" component = {Contact} />
      </Switch>
        <Foot/>
      </Router>
   
      
    )
  }
}

export default App;
