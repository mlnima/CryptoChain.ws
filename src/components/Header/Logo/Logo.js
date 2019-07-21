import React,{useContext} from 'react';
import LogoImage from './Logo.png'
import {Translate} from "react-translated";
import {Link} from "react-router-dom";
import './Logo.scss'
import {AppContext} from "../../../context/AppContext";

const Logo = () => {

    let contextData = useContext(AppContext);
    let homePagePath = '/' + contextData.state.language + '/';

    return (
        <div className='Logo'>
            <Link to={homePagePath}><img src={LogoImage} alt="Logo"/></Link>
            <h1><Translate text='Easy Way To Earn Crypto Currency' /></h1>
        </div>
    );

};

export default Logo;