import React,{useContext} from 'react';
import './StartAndLearn.scss';
import downloadDesktop from './img/downloadDesktop.png';
import downloadMobile from './img/downloadMobile.png'
import StartFaPreview from "./StartFaPreview";
import {AppContext} from "../../../../../context/AppContext";
import {Translate} from "react-translated";

const StartAndLearn = () => {
    let contextData = useContext(AppContext);
    let downloadImage = () => {
        let image;
        if (window.innerWidth < 768) {
            image = downloadMobile
        } else {
            image = downloadDesktop
        }
        return image
    };
    return (
        <div className='Learn'>
            <h1> <Translate text='how to start mining Bitcoin'/></h1>

            <p><Translate text='the only thing you need to do is to let your Desktop Browser or Smartphone stay Connect '/></p>
            <h2><Translate text='first, go to the link below'/></h2>
            <a className='downloadBtn' href={`https://get.cryptobrowser.site/${contextData.state.refer}`} target='_blank' rel='next'>
                <Translate text='Download Now'/>
             </a>
            <br/>
            <a href={`https://get.cryptobrowser.site/${contextData.state.refer}`} target='_blank' rel='next'>
                <img className='img' src={downloadImage()} alt="دانلود"/>
            </a>
            <p> <Translate text='after installation open the Software'/></p>
            <h2>     <Translate text='Download Now'/></h2>
            <StartFaPreview/>
        </div>
    );
};

export default StartAndLearn;