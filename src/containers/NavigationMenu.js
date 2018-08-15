import React, {Component} from 'react';
import ProfileIcon from "../components/navigation-menu/ProfileIcon";
import AppIcon from "../components/navigation-menu/AppIcon";
import NavigationMenuList from "../components/navigation-menu/NavigationMenuList";

export default class NavigationMenu
    extends Component {

    componentDidMount() {
        console.log('mounting')
    }

    render() {
        console.log('redirect')
        return (
            <div className='navigation-menu-container d-flex flex-column'>
                <AppIcon/>
                <NavigationMenuList/>
                <ProfileIcon/>
            </div>
        );
    }
}