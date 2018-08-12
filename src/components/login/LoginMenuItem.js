import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link, NavLink} from "react-router-dom";

export default class LoginMenuItem
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <Link to={this.props.to}
                         exact={this.props.exact}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

LoginMenuItem.propTypes = {};

LoginMenuItem.defaultProps = {};