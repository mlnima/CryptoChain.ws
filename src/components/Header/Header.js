import React, {useState, useEffect, useContext} from 'react';


import Logo from "./Logo/Logo";
import './Header.scss' ;
import {AppContext} from "../../context/AppContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Nav from "../Nav/Nav";

const Header = () => {
    let contextData = useContext(AppContext);
const [state,setState] = useState({
    menuBtnClick : false
})

    // useEffect(() => {
    //     const deviceWidth = window.innerWidth
    //     if (deviceWidth > 767) {
    //         contextData.setState({
    //             ...contextData.state,
    //             navMenu: true
    //         })
    //     } else {
    //         contextData.setState({
    //             ...contextData.state,
    //             navMenu: false
    //         })
    //     }
    //
    // }, []);


// let btnClassName = () =>{
//     let className ;
//     if (state.menuBtnClick){
//         className = 'menuBars rotated'
//     } else {
//         className = 'menuBars'
//     }
//     return className
// }




    let onClickHandler = () => {
state.menuBtnClick ? setState({...state,menuBtnClick: false}) : setState({...state,menuBtnClick: true})



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
            <Nav/>
            {/*<button onClick={onClickHandler} className={btnClassName()}><i className="fas fa-bars"/></button>*/}
        </div>
    );

};

export default Header;