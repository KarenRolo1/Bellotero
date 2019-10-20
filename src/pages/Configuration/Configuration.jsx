import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Configuration extends Component{
    constructor(props) {
        super(props);
        this.data = this.props.configuratorData.data.calculator;        
    }
    render = () =>{
        return(
            <div className="container configurator" >
                <div className="row justify-content-between">
                    <div className="col-md-5 configurator_description">
                        <span className=" configurator_description_title">
                            {this.data.title}
                        </span>
                        <p>
                            {this.data.description}
                        </p>
                    </div>
                    <div className="col-md-6 configurator_calculator">
                        <div className="my-5">
                            <label className="configurator_calculator_label">{this.data.description1}</label>
                            <div className="configurator_calculator_input">
                                <p>$</p>
                            </div>
                            <input type="range" className="custom-range" id="customRange1" />
                        </div>
                        <div className="my-5">
                            <label className="configurator_calculator_label">{this.data.description2}</label>
                            <div className="configurator_calculator_input">
                                <p>$</p>
                            </div>
                            <input type="range" className="custom-range" id="customRange2" />
                        </div>
                        <div className="row">
                            <div className="col-sm-6 result">
                                <span className="configurator_calculator_simbol">$</span>
                                <span className="configurator_calculator_quantity">36.211</span>
                                <p>{this.data.description3}</p>
                            </div>
                            <div className="col-sm-6 result">
                                <span className="configurator_calculator_simbol">$</span>
                                <span className="configurator_calculator_quantity">8.611</span>                            
                                <p>{this.data.description4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        configuratorData: state.configuratorData
    }
}

export default connect(mapStateToProps, null)(Configuration);