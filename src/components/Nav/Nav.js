import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import './Nav.scss'
import {Translate} from "react-translated";
import {AppContext} from "../../context/AppContext";

const Nav = () => {

    let contextData = useContext(AppContext);
    if (contextData.state.navMenu){
        return (
            <div className='Nav'>
                <NavLink className='NavItem' to={'/' + contextData.state.language }> <Translate text='Home' /></NavLink>
                <NavLink className='NavItem' to={'/' + contextData.state.language + '/start'}> <Translate text='Start' /></NavLink>

            </div>
        );
    }
    else return null

};

export default Nav;