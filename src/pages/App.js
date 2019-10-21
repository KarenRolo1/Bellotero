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
    this.props.action2();
    this.props.action();
    this.props.action1();
  }
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Testimonial}/>
            <Route path="/page-1" component={Testimonial}/>
            <Route path="/page-2" component={Configuration} />  
          </Switch>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  action : () => dispatch(sendTestimonialData()),
  action1 :  () => dispatch(sendConfiguratorData()),
  action2 :  () => dispatch(sendMenuData()),
});
export default connect(null, mapDispatchToProps)(App);
