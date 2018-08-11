import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class ProfileInfo
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                ProfileInfo has successfully been created.
            </div>
        );
    }
}

ProfileInfo.propTypes = {};

ProfileInfo.defaultProps = {};