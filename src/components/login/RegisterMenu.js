import React, {Component} from 'react';
import PropTypes from 'prop-types'
import LoginMenuItem from "./LoginMenuItem";

export default class RegisterMenu
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login menu-container'>
                <ul>
                    <LoginMenuItem to={'/login'}
                                     exact>
                        <div className='px-4'>
                            Log In
                        </div>
                    </LoginMenuItem>
                </ul>
            </div>
        );
    }
}

RegisterMenu.propTypes = {};

RegisterMenu.defaultProps = {};