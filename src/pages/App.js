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
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <Route path="/configuration">
            <Configuration />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
