import React, {useContext} from 'react';
import './StartAndLearn.scss';
import downloadDesktop from './img/downloadDesktop.png';
import downloadMobile from './img/downloadMobile.png'
import StartFaPreview from "./StartFaPreview";
import {AppContext} from "../../../../../context/AppContext";
import {Translate} from "react-translated";
import AllBrowserScreenshot from '../../../../../images/all-browsers-screen.png'
import WindowsMac from '../../../../../images/windows-mac.png'
import iphoneAndroid from '../../../../../images/iphone-android.png'

import info1 from '../../../../../images/features_1.png'
import info2 from '../../../../../images/features_2.png'
import info3 from '../../../../../images/features_3.png'
import info4 from '../../../../../images/features_4.png'


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
            <h1><Translate text='how to start mining Bitcoin'/></h1>
            <div className="devicesImage">
                <img className='AllBrowserScreenshot' src={AllBrowserScreenshot} alt="AllBrowserScreenshot"/>
                <img className='WindowsMac' src={WindowsMac} alt="WindowsMac"/>
                <img className='iphoneAndroid' src={iphoneAndroid} alt="iphoneAndroid"/>
            </div>
            <div className="infos">
                <div className="info1 info">
                    <img className='info1' src={info1} alt="info1"/>
                    <p><Translate text='Chrome-based browsing experience'/></p>
                </div>
                <div className="info2 info">
                    <img className='info2' src={info2} alt="info2"/>
                    <p><Translate text='Built-in CryptoTab mining features'/></p>
                </div>
                <div className="info3 info">
                    <img className='info3' src={info3} alt="info3"/>
                    <p><Translate text='Sync everything across multiple devices'/></p>
                </div>
                <div className="info4 info">
                    <img className='info4' src={info4} alt="info4"/>
                    <p><Translate text='Blazing fast and lightweight browser'/></p>
                </div>

            </div>

            <div className="videoExplanation">
                <h2><Translate text='Watch brief explanation video'/></h2>
                <p><Translate text='Watch this short promo video to learn more about how CryptoTab works'/></p>
                <iframe
                    title='youtube'
                    src="https://www.youtube.com/embed/YzqCO-sg7_U?autoplay=0&amp;mute=0&amp;rel=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;playlist=XqwaHWawdAA,c4lvBHSOdwQ,yAUrzAyOCnw,VBLeFwaShjA,5r69hh6ARvA,omzb6X8VeOM,xN0IdF4ILp0"
                    frameBorder="0" allowFullScreen="allow" rel="noopener noreferrer" />
            </div>

            <div className='howTo'>
                <p><Translate
                    text='the only thing you need to do is to let your Desktop Browser or Smartphone stay Connect '/></p>
                <h2><Translate text='first, go to the link below'/></h2>
                <a className='downloadBtn' href={`https://get.cryptobrowser.site/${contextData.state.refer}`}
                   target='_blank' rel="noopener noreferrer"><Translate text='Download Now'/></a>
                <br/>
                <a href={`https://get.cryptobrowser.site/${contextData.state.refer}`} target='_blank' rel="noopener noreferrer">
                    <img className='img' src={downloadImage()} alt="دانلود"/>
                </a>
                <p><Translate text='after installation open the Software'/></p>

                <StartFaPreview/>
            </div>


        </div>
    );
};

export default StartAndLearn;