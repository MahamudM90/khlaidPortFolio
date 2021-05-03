import React from 'react';
import Lottie from 'react-lottie';
import typingComputer from '../../Assest/imges/lottie/typingComputer.json'

const DisplayLotti = () => {
    const defaultOptions ={
        loop : true ,
        autoplay : true , 
        animationData : typingComputer,
        rendererSettings : {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div >
            <Lottie options={defaultOptions}
                className="lottie"
                height={350}
                width={500}
                />
        </div>
    );
};

export default DisplayLotti;
