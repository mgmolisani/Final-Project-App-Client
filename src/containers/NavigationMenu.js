import React, {Component} from 'react';
import ProfileIcon from "../components/navigation-menu/ProfileIcon";
import AppIcon from "../components/navigation-menu/AppIcon";
import NavigationMenuList from "../components/navigation-menu/NavigationMenuList";
import {AuthenticationConsumer} from "./authentication/AuthenticationContext";

export default class NavigationMenu
    extends Component {

    render() {
        return (
            <AuthenticationConsumer>
                {({currentUser}) => (
                    <div className='navigation-menu-container d-flex flex-column'>
                        <AppIcon/>
                        <NavigationMenuList currentUser={currentUser}/>
                        <ProfileIcon currentUser={currentUser}/>
                    </div>)}
            </AuthenticationConsumer>
        );
    }
}