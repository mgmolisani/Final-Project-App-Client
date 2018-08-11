import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom";

export default class ProfileMenuItem
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <NavLink to={this.props.to}
                         exact={this.props.exact}
                         activeClassName='active'>
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}

ProfileMenuItem.propTypes = {};

ProfileMenuItem.defaultProps = {};