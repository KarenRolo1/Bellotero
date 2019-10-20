import React from "react";
import {Carousel} from 'react-bootstrap'
import './styles.scss';

const CarouselComponent = (props) => {
    return(
        <Carousel>
            {props.reviews.map((item, i)=>{
                return(
                    <Carousel.Item key = {i}>
                        <div className="row carouselItem">
                            <div className="col-md-4 carouselItem_name">
                                <h2>{item.name}</h2>
                                <p>{item.position}</p>
                            </div>
                            <div className="col-md-8 carouselItem_comment">
                                {item.comment}
                            </div>
                        </div>
                    </Carousel.Item>
                )
            })
            }
        </Carousel>
    )
}

export default CarouselComponent;