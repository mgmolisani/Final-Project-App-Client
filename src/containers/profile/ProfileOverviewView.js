import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class ProfileOverviewView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                OverviewView has successfully been created.
            </div>
        );
    }
}

ProfileOverviewView.propTypes = {};

ProfileOverviewView.defaultProps = {};