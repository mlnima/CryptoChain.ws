import React,{useState,useEffect} from 'react';

export const AppContext = React.createContext();
export const AppProvider = props =>{
     let pathName = window.location.pathname;

     let setLanguageOnLoad =()=>{
         let lang = 'en';
         if (pathName.includes('/en/')) {
             lang = 'en';
         }else if (pathName.includes('/fa/')) {
             lang = 'fa';
         }else if (pathName.includes('/de/')) {
             lang = 'de';
         }else {
             lang = 'en';
         }
         return lang
     };

    const [state,setState] = useState({
        language: setLanguageOnLoad()
    });

    return(
        <div>
            <AppContext.Provider value={{state,setState}}>
                {props.children}
            </AppContext.Provider>
        </div>
    )
};