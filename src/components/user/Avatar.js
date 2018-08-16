import React, {Component} from 'react';

export default class Avatar
    extends Component {

    render() {
        const {avatar, username, size} = this.props;
        return (
            <div className='avatar'
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