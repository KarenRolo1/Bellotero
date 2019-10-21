import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Configuration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            foodSaving : 0,
            annualSaving : 0,
            fooltimeEmployees: 0,
            monthlyIngredient: 0
        }
    }
    onChange=(id, event)=>{
        if(id==="customRange1"){
            let foodsavingCalculate =  Math.round(event.target.value*0.3);
            this.setState({
                foodSaving : foodsavingCalculate,
                annualSaving : this.state.fooltimeEmployees * 1337 + foodsavingCalculate,
                monthlyIngredient : event.target.value
            })
        }
        else{
            this.setState({
                annualSaving : Math.round(event.target.value *1337 + this.state.foodSaving),
                fooltimeEmployees : event.target.value
            })
        }
    }
    render = () =>{
        this.data = this.props.configuratorData.data; 
        return(
            <div className="container configurator" >
                {(this.data)?
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
                                <p>{'$' + this.state.monthlyIngredient}</p>
                            </div>
                            <input type="range" className="custom-range" id="customRange1" min="10" max="100" onChange={(e)=>this.onChange('customRange1',e)}/>
                        </div>
                        <div className="my-5">
                            <label className="configurator_calculator_label">{this.data.description2}</label>
                            <div className="configurator_calculator_input">
                                <p>{'$' + this.state.fooltimeEmployees}</p>
                            </div>
                            <input type="range" className="custom-range" id="customRange2" min="1" max="10" onChange={(e)=>this.onChange('customRange2', e)}/>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 result">
                                <span className="configurator_calculator_simbol">$</span>
                                <span className="configurator_calculator_quantity">{this.state.foodSaving}</span>
                                <p>{this.data.description3}</p>
                            </div>
                            <div className="col-sm-6 result">
                                <span className="configurator_calculator_simbol">$</span>
                                <span className="configurator_calculator_quantity">{this.state.annualSaving}</span>                            
                                <p>{this.data.description4}</p>
                            </div>
                        </div>
                    </div>
                </div> :<div>Calculator</div>
                }
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