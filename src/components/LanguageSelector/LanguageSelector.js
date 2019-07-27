import React, {useContext} from 'react';
import './LanguageSelector.scss'
import {AppContext} from "../../context/AppContext";
import {withRouter} from "react-router-dom";


const LanguageSelector = () => {

    let contextData = useContext(AppContext);

    let changeHandler = (e) =>{
            contextData.setState({
                ...contextData.state,
                language: e.target.value
            });
    };
    return (
            <select className='LanguageSelector' onChange={changeHandler} value={contextData.state.language}>
                <option value='en'>English</option>
                <option value='fa'>فارسی</option>
            </select>
    );
};

export default withRouter(LanguageSelector);