import React, {useContext} from 'react';
import CopyRight from "./CopyRight";
import './Footer.scss';
import QRCode from '../../images/qrcode.png'
import {AppContext} from "../../context/AppContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {Translate} from "react-translated";


const Footer = () => {
    let contextData = useContext(AppContext);


    let Barcode = () => {
        if (contextData.state.refer === '4789121') {
            return (
                <React.Fragment>
                    <a href={`https://get.cryptobrowser.site/${contextData.state.refer}`} target='_blank'
                       rel="noopener noreferrer"> <img className='QRCode' src={QRCode} alt="QRCode"/></a>
                    <p><Translate text='Or'/></p>
                </React.Fragment>
            )
        } else return null
    }
    return (
        <div className='Footer'>
            <h4><Translate text='Download CryptoTab Directly'/></h4>
            <Barcode/>
            <a className='downloadExternal' href={`https://get.cryptobrowser.site/${contextData.state.refer}`}
               target='_blank' rel="noopener noreferrer"><Translate text='CLICK HERE TO DOWNLOAD'/></a>
            <LanguageSelector/>
            <CopyRight/>

        </div>
    );
};

export default Footer;