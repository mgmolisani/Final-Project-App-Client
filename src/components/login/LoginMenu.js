import React, {Component} from 'react';
import PropTypes from 'prop-types'
import LoginMenuItem from "./LoginMenuItem";

export default class LoginMenu
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login menu-container'>
                <ul>
                    <LoginMenuItem to={'/register'}
                                     exact>
                        <div className='px-4'>
                            Register
                        </div>
                    </LoginMenuItem>
                </ul>
            </div>
        );
    }
}

LoginMenu.propTypes = {};

LoginMenu.defaultProps = {};