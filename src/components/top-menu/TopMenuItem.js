import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {NavItem} from "reactstrap";

export default class TopMenuItem
    extends Component {

    render() {
        return (
            <NavItem>
                <NavLink to={this.props.to}
                         exact={this.props.exact}
                         activeClassName='active'>
                    {this.props.children}
                </NavLink>
            </NavItem>
        );
    }
}

TopMenuItem.propTypes = {};

TopMenuItem.defaultProps = {};