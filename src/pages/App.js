import React from 'react';
import { Testimonial } from './Testimonial';
import { Configuration } from './Configuration';
import { Header } from '../components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Testimonial}/>
          <Route path="/configurator" component={Configuration} /> 
        </Switch>
    </Router>
  );
}

export default App;
