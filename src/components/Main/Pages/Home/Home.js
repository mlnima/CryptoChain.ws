import React, {useContext} from 'react';
import {AppContext} from "../../../../context/AppContext";
import Title from "./Title";
import OverView from "./OverView";
import DownIco from '../../../../images/ico_arrow_down.svg'
import './Home.scss'
import GetStart from "./GetStart";
const Home = () => {
    return (
        <div className='Home'>
            <Title/>
            <OverView/>
            {/*<div className='DownArrow'>*/}
                {/*<img src={DownIco} alt="DownIco" className='DownIco'/>*/}
            {/*</div>*/}
<GetStart/>
        </div>
    );
};

export default Home;