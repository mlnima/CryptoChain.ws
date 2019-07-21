import React from 'react';
import {Switch,Route} from "react-router";
import Home from "./Main/Pages/Home/Home";
import Start from "./Main/Pages/Start/Start";

const Router = () => {

    return (
        <div>
            <Route exact path='/:lang' component={Home}/>
            <Route exact path='/:lang/start' component={Start}/>
        </div>
    );
};

export default Router;