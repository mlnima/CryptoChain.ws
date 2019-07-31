import React from 'react';
import {Switch,Route} from "react-router";
import Home from "./Main/Pages/Home/Home";
import Start from "./Main/Pages/Start/Start";
import ThirdPartyIdHandler from "./ThirdPartyIdHandler";

const Router = () => {

    return (
        <div>
            <Route exact path='/:lang' component={Home}/>
            <Route exact path='/:lang/start' component={Start}/>
            <Route exact path='/:lang/id/:id' component={ThirdPartyIdHandler}/>
        </div>
    );
};

export default Router;