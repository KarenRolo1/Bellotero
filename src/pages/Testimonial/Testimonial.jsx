import React, { Component } from 'react';
import { CarouselComponent } from '../../components/Carousel'
import './style.scss';

class Testimonial extends Component{
    render = () =>{
        return(
            <div class=" testimonial" >
                <div class="row">
                <div class="col-sm testimonial_title">
                    <span>
                        Our customers love us
                    </span>
                </div>
                    <div class="col-sm testimonial_carousel">
                        <CarouselComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial