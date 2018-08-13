import React, {Component} from 'react';
import PropTypes from 'prop-types'

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

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

Avatar.defaultProps = {
    avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiL_aq0tencAhXPVN8KHRVNCDIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconspng.com%2Fimage%2F11826%2Fperson-icon&psig=AOvVaw34SdD8HeSFTECffoKPqgwb&ust=1534228693929838',
    username: ''
};