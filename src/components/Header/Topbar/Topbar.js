import React from 'react';
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import './Topbar.scss'

const Topbar = () => {

    return (
        <div className='Topbar'>
         <LanguageSelector/>
        </div>
    );

};

export default Topbar;