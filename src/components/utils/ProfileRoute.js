import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Route} from "react-router-dom";

export default class ProfileRoute
    extends Component {

    constructor(props) {
        super(props);
    }

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

ProfileRoute.propTypes = {};

ProfileRoute.defaultProps = {};