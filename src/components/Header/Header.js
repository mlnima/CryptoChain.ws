import React, {useState, useEffect , useContext} from 'react';


import Logo from "./Logo/Logo";
import './Header.scss' ;
import {AppContext} from "../../context/AppContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = () => {
    let contextData = useContext(AppContext);


    useEffect(() => {
        const deviceWidth = window.innerWidth
        if (deviceWidth > 768) {
            contextData.setState({
                ...contextData.state,
                navMenu: true
            })
        } else {
            contextData.setState({
                ...contextData.state,
                navMenu: false
            })
        }

    }, []);


    let onClickHandler = () => {

        contextData.state.navMenu ? contextData.setState({
            ...contextData.state,
            navMenu: false
        }) : contextData.setState({
            ...contextData.state,
            navMenu: true
        })
    };


    return (
        <div className='Header'>
            <Logo/>
            <LanguageSelector/>
                <button onClick={onClickHandler} className='menuBars'><i className="fas fa-bars"/></button>

        </div>
    );

};

export default Header;