import React, {Component} from 'react';

export default class Avatar
    extends Component {

    render() {
        const {avatar, username, size, className} = this.props;
        return (
            <div className={`avatar ${className}`}
                 style={{
                     height: size,
                     width: size
                 }}>
                <img src={avatar}
                     alt={username}/>
            </div>
        );
    }
}