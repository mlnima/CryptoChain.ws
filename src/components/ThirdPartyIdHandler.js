import React, {useContext, useEffect} from 'react';
import {AppContext} from "../context/AppContext";
import {withRouter} from "react-router";

const ThirdPartyIdHandler = (props) => {
    let contextData = useContext(AppContext);
    const referID = props.match.params.id;

    useEffect(() => {
        contextData.setState({
            ...contextData.state,
            refer: referID
        });
    }, []);
    props.history.push('/' + contextData.state.language);

    return (
        <div>
            <h3>setting refer id ....</h3>
            <h3>please waite ....</h3>
        </div>
    );
};

export default withRouter(ThirdPartyIdHandler);