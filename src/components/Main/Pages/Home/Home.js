import React,{useContext} from 'react';
import {AppContext} from "../../../../context/AppContext";
import Fa from './HomeFa/Fa'
const Home = () => {

    let contextData = useContext(AppContext);
    if (contextData.state.language === 'fa'){
        return (
            <div className='Home'>
<Fa/>
            </div>
        );
    } else return (
        <div className='Home'>
          <h2>Comming Soon</h2>
        </div>
    );
};

export default Home;