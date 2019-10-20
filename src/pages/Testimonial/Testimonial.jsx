import React, { Component } from 'react';
import { CarouselComponent } from '../../components/Carousel'
import './style.scss';

class Testimonial extends Component{
    constructor(props) {
        super(props);
        this.data = [{
            name : "Karen",
            position : "Director",
            comment : "cko osj ddowmdow djie dninedi dni niniwnid nid enidn in id indienin di"
        },
        {
            name : "Tania",
            position : "LALALALA",
            comment : "cko osj ddowmdow djie dninedi dni niniwnid nid enidn in id indienin di"
        }
    ];
    }
    render = () =>{
        return(
            <div class="container testimonial" >
                <div class="row">
                    <div class="col-md-12">
                        <div className=" testimonial_title">
                            <p>Our customers love us</p>
                        </div>
                    </div>
                    <div class="col-md-12 testimonial_carousel">
                        <CarouselComponent reviews={this.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial