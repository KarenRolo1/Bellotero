import React, { Component } from 'react';
import './style.scss';

class Configuration extends Component{
    render = () =>{
        return(
            <div class="container configurator" >
                <div class="row">
                    <div class="col-md-5 configurator_description">
                        <span className=" configurator_title">
                            Save more with Bellotero.io
                        </span>
                        <p>
                            With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety. 
                        </p>
                    </div>
                    <div class="col-md-7 configurator_calculator">
                        <div className="my-5">
                            <label htmlFor="customRange1">Monthly ingredient spending</label>
                            <input type="range" className="custom-range" id="customRange1" />
                        </div>
                        <div className="my-5">
                            <label htmlFor="customRange2">Full-time employees that  process invoices</label>
                            <input type="range" className="custom-range" id="customRange2" />
                        </div>
                        <div class="col-md-6 result">

                        </div>
                        <div class="col-md-6 result">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Configuration