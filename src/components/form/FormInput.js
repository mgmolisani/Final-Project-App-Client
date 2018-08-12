import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class FormInput
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label: inputLabel, value, type, onChange} = this.props;
        return (
            <div>
                <label>
                    {inputLabel}
                </label>
                <input value={value}
                       type={type || 'text'}
                       onChange={onChange}/>
            </div>
        );
    }
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

FormInput.defaultProps = {};