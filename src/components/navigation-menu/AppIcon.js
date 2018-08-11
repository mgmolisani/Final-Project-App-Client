import React, {Component} from 'react';
import Logo from "../utils/Logo";
import {Link} from "react-router-dom";

export default class AppIcon
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app-icon-container'>
                <Link to={'/'}>
                    <div className='app-icon'>
                        <Logo/>
                    </div>
                </Link>
            </div>
        );
    }
}

AppIcon.propTypes = {};

AppIcon.defaultProps = {};