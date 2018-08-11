import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {NavLink} from "react-router-dom";

export default class NavigationMenuListItem
    extends Component {

    render() {
        return (
            <li>
                <NavLink to={this.props.to}
                         activeClassName='active'>
                    <div className='position-relative'>
                        <FontAwesomeIcon icon={this.props.icon}
                                         size={'2x'}
                                         fixedWidth={true}/>
                        {this.props.alerts > 0 ?
                            <div className='navigation-menu-item-alert'>
                                {this.props.alerts}
                            </div> :
                            null}
                    </div>
                </NavLink>
            </li>
        );
    }
}

NavigationMenuListItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    alerts: PropTypes.number
};

NavigationMenuListItem.defaultProps = {};