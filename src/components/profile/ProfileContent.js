import React, {Component} from 'react';

export default class ProfileContent
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='profile-content-wrapper'>
                <div className='profile-content-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ProfileContent.propTypes = {};

ProfileContent.defaultProps = {};