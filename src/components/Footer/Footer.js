import React,{useContext} from 'react';
import CopyRight from "./CopyRight";
import './Footer.scss';
import QRCode from '../../images/qrcode.png'
import {AppContext} from "../../context/AppContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {Translate} from "react-translated";


const Footer = () => {
    let contextData = useContext(AppContext);


    return (
        <div className='Footer'>
            <h4><Translate text='Download CryptoTab Directly'/></h4>
            <a href={`https://get.cryptobrowser.site/${contextData.state.refer}`} target='_blank' rel='next'> <img className='QRCode' src={QRCode} alt="QRCode"/></a>
            <p><Translate text='Or'/> </p>
            <a className='downloadExternal' href={`https://get.cryptobrowser.site/${contextData.state.refer}`} target='_blank' rel='next'><Translate text='CLICK HERE TO DOWNLOAD'/></a>
            <LanguageSelector/>
            <CopyRight/>

        </div>
    );
};

export default Footer;