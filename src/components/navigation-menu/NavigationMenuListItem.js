import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {NavLink} from "react-router-dom";

export default class NavigationMenuListItem
    extends Component {

    render() {
        return (
            <li>
                <NavLink to={this.props.to}
                         isActive={this.props.isActive}
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