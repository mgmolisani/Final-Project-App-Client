import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class FormLabel
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='label-container'>
                <label className='label-text'>
                    {this.props.label}
                </label>
                <div className='label-line'/>
            </div>
        );
    }
}

FormLabel.propTypes = {
    label: PropTypes.string.isRequired
};

FormLabel.defaultProps = {
    label: 'Label'
};