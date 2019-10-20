import React, { Component } from 'react';
import './style.scss';

class Configuration extends Component{
    render = () =>{
        return(
            <div class="container configurator" >
                <div class="row justify-content-between">
                    <div class="col-md-5 configurator_description">
                        <span className=" configurator_description_title">
                            Save more with Bellotero.io
                        </span>
                        <p>
                            With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety. 
                        </p>
                    </div>
                    <div class="col-md-6 configurator_calculator">
                        <div className="my-5">
                            <label className="configurator_calculator_label">Monthly ingredient spending</label>
                            <div className="configurator_calculator_input">
                                <p>$</p>
                            </div>
                            <input type="range" className="custom-range" id="customRange1" />
                        </div>
                        <div className="my-5">
                            <label className="configurator_calculator_label">Full-time employees that  process invoices</label>
                            <div className="configurator_calculator_input">
                                <p>$</p>
                            </div>
                            <input type="range" className="custom-range" id="customRange2" />
                        </div>
                        <div className="row">
                            <div class="col-sm-6 result">
                                <span className="configurator_calculator_simbol">$</span>
                                <span className="configurator_calculator_quantity">36.211</span>
                                <p>Estimated cost food savings</p>
                            </div>
                            <div class="col-sm-6 result">
                                <span className="configurator_calculator_simbol">$</span>
                                <span className="configurator_calculator_quantity">8.611</span>                            
                                <p>Your estimated annual savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Configuration