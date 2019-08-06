import React, {useContext, useEffect} from 'react';
import {Provider} from 'react-translated'
import {AppContext} from "./context/AppContext";
import Translation from './components/Translate/Translate'
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import {withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import './App.scss'
import Nav from "./components/Nav/Nav";

function App(props) {
    let contextData = useContext(AppContext);
    let pathName = props.location.pathname;

    let changeLanguageDetect = () => {
        let newUrl = '';
        if (pathName.includes('/en/')) {
            newUrl = pathName.replace('/en/', '/' + contextData.state.language + '/');
            props.history.push(newUrl)
        }else if (pathName.includes('/de/')) {
            newUrl = pathName.replace('/de/', '/' + contextData.state.language + '/');
            props.history.push(newUrl)
        }else if (pathName.includes('/fa/')) {
            newUrl = pathName.replace('/fa/', '/' + contextData.state.language + '/');
            props.history.push(newUrl)
        }else if (pathName === '/') {
            newUrl = '/' + contextData.state.language + '/';
            props.history.push(newUrl)
        }else {
            newUrl = '/' + contextData.state.language + '/';
            props.history.push(newUrl)
        }
    };


    useEffect(() => {
        changeLanguageDetect()
        if (contextData.state.language === 'fa'){
            document.dir = 'rtl'
        }else {
            document.dir = 'ltr'
        }

    }, [contextData.state]);


    return (
        <Provider language={contextData.state.language} translation={Translation}>
            <div className="App">
                <Header/>
                {/*<Nav/>*/}
                <Main/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default withRouter(App);
