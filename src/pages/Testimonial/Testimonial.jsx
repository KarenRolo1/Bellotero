import React, { Component } from 'react';
import { CarouselComponent } from '../../components/Carousel'
import './style.scss';
import { connect } from 'react-redux';

class Testimonial extends Component{
    constructor(props) {
        super(props);
        this.data = this.props.testimonialData.data.slider;        
    }
    render = () =>{
        return(
            <div className="container testimonial" >
                <div className="row">
                    <div className="col-md-12">
                        <div className=" testimonial_title">
                            <p>{this.data.title}</p>
                        </div>
                    </div>
                    <div className="col-md-12 testimonial_carousel">
                        <CarouselComponent reviews={this.data.reviews}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        testimonialData: state.testimonialData
    }
}

export default connect(mapStateToProps, null)(Testimonial);