import React,{useContext} from "react";
import {AppContext} from "../../../../context/AppContext";
import './Title.scss'
import {Translate} from "react-translated";
import {Link} from "react-router-dom";

const Title = () => {

    let contextData = useContext(AppContext);






    if (contextData.state.language === 'fa') {
        return (
            <div className='Title'>
                <h1>Bitcoin <br/> یک شبکه پرداخت نوآورانه و نوع جدیدی از پول است </h1>
                <Link to={'/' + contextData.state.language + '/start'} ><Translate text='Get started with Bitcoin' /></Link>
            </div>
        );
    } else return (
        <div className='Title'>
            <h1>Bitcoin is an innovative payment<br/> network and a new kind of money.</h1>
            <Link to={'/' + contextData.state.language + '/start'} ><Translate text='Get started with Bitcoin' /></Link>
        </div>
    );
};

export default Title;