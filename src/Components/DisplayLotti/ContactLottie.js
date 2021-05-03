import React from 'react';
import Lottie from 'react-lottie';
import mail from '../../Assest/imges/lottie/mial.json'

const ContactLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mail,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Lottie options={defaultOptions}
            />
    );
};

export default ContactLottie;