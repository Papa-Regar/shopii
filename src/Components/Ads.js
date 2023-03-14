import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ads1 from '../Components/ads1.jpg'
import ads2 from '../Components/ads2.jpg'


const Ads = () => {
    return (

        <div class="row mt-2 mb-3">
            <div class="col p-3">
            <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} showStatus={false}>
                    <div>
                        <img src={ads1} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
                    </div>
                    <div>
                    <img src={ads2} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
                    </div>
                    
                </Carousel>
            </div>
        </div>

    )
}

export default Ads
