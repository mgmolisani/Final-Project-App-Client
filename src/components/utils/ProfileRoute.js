import React, {Component} from 'react';
import {Route} from "react-router-dom";

export default class ProfileRoute
    extends Component {

    render() {
        const {path, exact, component: Component, userId} = this.props;
        return (
            <Route path={path}
                   exact={exact}
                   render={() => {
                       return <Component userId={userId}/>;
                   }}/>
        );
    }
}