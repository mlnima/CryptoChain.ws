import React,{useEffect} from 'react';
import Title from "./Title";
import OverView from "./OverView";
import DownIco from '../../../../images/ico_arrow_down.svg'
import './Home.scss'
import GetStart from "./GetStart";
import {scrollSmooth} from "../../../Variables";

const Home = () => {

    useEffect(() => {
        scrollSmooth()
    }, []);
    return (
        <div className='Home'>
            <Title/>
            <OverView/>
            <div className='DownArrow'>
                <img src={DownIco} alt="DownIco" className='DownIco'/>
            </div>
            <GetStart/>
        </div>
    );
};

export default Home;