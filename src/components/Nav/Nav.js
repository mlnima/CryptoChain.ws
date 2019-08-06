import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import './Nav.scss'
import {Translate} from "react-translated";
import {AppContext} from "../../context/AppContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Nav = () => {

    let contextData = useContext(AppContext);
    if (contextData.state.navMenu) {
        return (
            <div className='Nav'>
                <NavLink className='NavItem' to={'/' + contextData.state.language}> <i className="fas fa-home"/><p>
                    <Translate text='Home'/></p></NavLink>
                <NavLink className='NavItem' to={'/' + contextData.state.language + '/start'}> <i
                    className="fab fa-bitcoin"/><p><Translate text='Start'/></p></NavLink>

            </div>
        );
    } else return null

};

export default Nav;