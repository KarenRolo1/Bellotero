import React, {Component} from 'react';
import { Testimonial } from './Testimonial';
import { Configuration } from './Configuration';
import { Header } from '../components/Header';
import { sendTestimonialData } from '../redux/actions/A_testimonial';
import { sendConfiguratorData } from '../redux/actions/A_configurator';
import { sendMenuData } from '../redux/actions/A_menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

export class App extends Component{
  constructor(props) {
    super(props);
    this.props.actions.sendMenuData();
    console.log("menuuuuuuuu", this.props);
    this.props.actions.sendTestimonialData();
    console.log("dataaaaaaaaa", this.props);
    this.props.actions.sendConfiguratorData();
    console.log("configggggggggggg", this.props);
  }
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Testimonial}/>
            <Route path="/configuration" component={Configuration} /> 
          </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sendTestimonialData, sendConfiguratorData, sendMenuData}, dispatch)
});
export default connect(null, mapDispatchToProps)(App);
