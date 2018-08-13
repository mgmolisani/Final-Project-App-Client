import React, {Component} from 'react';
import TopMenuItem from "../top-menu/TopMenuItem";
import TopMenu from "../top-menu/TopMenu";

export default class LoginMenu
    extends Component {

    render() {
        return (
            <TopMenu expand={'xs'}>
                <TopMenuItem to={'/register'}>
                    Register
                </TopMenuItem>
            </TopMenu>
        );
    }
}

LoginMenu.propTypes = {};

LoginMenu.defaultProps = {};