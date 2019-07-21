import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import './Nav.scss'
import {Translate} from "react-translated";
import {AppContext} from "../../../context/AppContext";

const Nav = () => {

    let contextData = useContext(AppContext);

    return (
        <div className='Nav'>
            <div className="navItems">
                <NavLink to={'/' + contextData.state.language }> <Translate text='Home' /></NavLink>
                <NavLink to={'/' + contextData.state.language + '/start'}> <Translate text='Start' /></NavLink>
            </div>

        </div>
    );
};

export default Nav;