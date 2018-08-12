import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormLabel from "./FormLabel";

export default class FormInput
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    render() {
        const {label: inputLabel, value, type, readOnly, onChange} = this.props;
        return (
            <div className='form-input-container'>
                <FormLabel label={inputLabel}/>
                <span><input value={value}
                       type={type}
                       readOnly={readOnly}
                             onChange={event => onChange(event.target.value)}/></span>
            </div>
        );
    }
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

FormInput.defaultProps = {
    type: 'text',
    readOnly: false
};