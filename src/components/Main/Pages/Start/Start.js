import React, {useEffect} from 'react';
import StartAndLearn from "./StartFa/StartAndLearn";
import {scrollSmooth} from '../../../Variables'

const Start = () => {

    useEffect(() => {
        scrollSmooth()
    }, []);

    return (
        <div className='Home'>
            <StartAndLearn/>

        </div>
    );

};

export default Start;