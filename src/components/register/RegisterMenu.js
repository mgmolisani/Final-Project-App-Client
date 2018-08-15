import React, {Component} from 'react';
import TopMenuItem from "../top-menu/TopMenuItem";
import TopMenu from "../top-menu/TopMenu";

export default class RegisterMenu
    extends Component {

    render() {
        return (
            <TopMenu expand={'xs'}>
                <TopMenuItem to={'/login'}>
                    Log In
                </TopMenuItem>
            </TopMenu>
        );
    }
}

RegisterMenu.propTypes = {};

RegisterMenu.defaultProps = {};