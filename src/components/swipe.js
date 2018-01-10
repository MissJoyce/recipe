import React, { Component } from 'react'
import ReactSwipe from "react-swipe";
export default class  Carousel extends Component {
    render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:1000,speed:500}}>
                <div><img src="src/assets/images/banner.png" alt=""/></div>
                <div><img src="src/assets//images/banner4.jpg" alt=""/></div>
                <div><img src="src/assets//images/banner2.jpg" alt=""/></div>
                <div><img src="src/assets//images/banner3.jpg" alt=""/></div>                                            
            </ReactSwipe>
        )
    }
}
