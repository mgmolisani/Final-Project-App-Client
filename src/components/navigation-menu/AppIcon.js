import React, {Component} from 'react';
import Logo from "../utils/Logo";

export default class AppIcon
    extends Component {

    render() {
        return (
            <div className='app-icon-container'>
                <div className='app-icon'>
                    <Logo/>
                </div>
            </div>
        );
    }
}