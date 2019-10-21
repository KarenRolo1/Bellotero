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
  Route,
  Switch
} from "react-router-dom";  

export class App extends Component{
  constructor(props) {
    super(props);
    this.props.actions.sendMenuData();
    this.props.actions.sendTestimonialData();
    this.props.actions.sendConfiguratorData();
  }
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path="/Testimonial" component={Testimonial}/>
            <Route path="/" component={Configuration} />  
          </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sendTestimonialData, sendConfiguratorData, sendMenuData}, dispatch)
});
export default connect(null, mapDispatchToProps)(App);
