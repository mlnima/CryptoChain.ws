import React from 'react';
import MobileAppPreview from './img/mobileApp.jpg'
import WebPreview from './img/webSitePreview.png'
import './StartFaPreview.scss'
import {Translate} from "react-translated";

const StartFaPreview = () => {




    let SetCorrectImage = () =>{
        let correctImage ;
        if (window.innerWidth < 768){
            correctImage = MobileAppPreview
        } else {
            correctImage = WebPreview
        }
        return (
            <img className='img' src={correctImage} alt="MobilePreview"/>
        )
    };


        return (
            <div>
                <SetCorrectImage/>
                <h3>1 . <Translate text='Login to account page'/> </h3>
                <h3>2 . <Translate text='Mining Bitcoin by using your Device'/> </h3>
                <h3>3 . <Translate text='Hashing speed, more Hash  = more Bitcoin'/>  </h3>
                <h3>4 . <Translate text='Earned amount'/> </h3>
                <h3>5 . <Translate text='The number of your subscribers'/></h3>
                <h3>6 . <Translate text='Referral Link, which you can share it with your Friend and Make a lot of Money'/></h3>
            </div>
        );


};

export default StartFaPreview;