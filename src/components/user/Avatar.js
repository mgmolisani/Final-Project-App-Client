import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Avatar
    extends Component {

    constructor(props) {
        super(props);
    }

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

Avatar.defaultProps = {};