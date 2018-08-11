import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class LoginView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                LoginView has successfully been created.
            </div>
        );
    }
}

LoginView.propTypes = {};

LoginView.defaultProps = {};