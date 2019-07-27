import React, {useContext} from 'react';
import {AppContext} from "../../../../context/AppContext";
import StartAndLearn from "./StartFa/StartAndLearn";


const Start = () => {


    return (
        <div className='Home'>
            <StartAndLearn/>
        </div>
    );

};

export default Start;