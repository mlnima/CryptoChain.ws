import React from 'react';
import Nav from './Nav/Nav'
import Topbar from "./Topbar/Topbar";
import Logo from "./Logo/Logo";
import './Header.scss' ;

const Header = () => {

    return (
        <div className='Header'>
            <Topbar/>
            <Logo/>
            <Nav/>
        </div>
    );

};

export default Header;