import React, {useContext} from 'react';
import './LanguageSelector.scss'
import {AppContext} from "../../context/AppContext";
import {withRouter} from "react-router-dom";
import IrFlag from './Flags/ir.svg'
import DeFlag from './Flags/de.svg'
import UsFlag from './Flags/us.svg'

const LanguageSelector = () => {

    let contextData = useContext(AppContext);

    let onSelectFlag = (e) => {
        let language = e.target.getAttribute('alt');

        contextData.setState({
            ...contextData.state,
            language: language
        });
    };

    return (
        <div className='LanguageSelector'>
            <img src={IrFlag} alt='fa' onClick={onSelectFlag}/>
            <img src={DeFlag} alt='de' onClick={onSelectFlag}/>
            <img src={UsFlag} alt='en' onClick={onSelectFlag}/>
        </div>
    );
};

export default withRouter(LanguageSelector);