import React, { Component } from 'react';
import { CarouselComponent } from '../../components/Carousel'
import './style.scss';

class Testimonial extends Component{
    render = () =>{
        return(
            <div class="container testimonial" >
                <div class="row">
                    <div class="col-sm-12">
                        <div className=" testimonial_title">
                            <p>Our customers love us</p>
                        </div>
                    </div>
                    <div class="col-sm-12 testimonial_carousel">
                        <CarouselComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial