import React,{useContext} from 'react';
import {AppContext} from "../../../../context/AppContext";
import StartFa from "./StartFa/StartFa";


const Start = () => {
    let contextData = useContext(AppContext);
    if (contextData.state.language === 'fa'){
        return (
            <div className='Home'>
             <StartFa/>
            </div>
        );
    } else return (
        <div className='Home'>
            <h2>Coming Soon</h2>
        </div>
    );
};

export default Start;