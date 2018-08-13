import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormLabel from "./FormLabel";

export default class FormTextArea
    extends Component {

    render() {
        const {label: inputLabel, value, placeholder, rows, resize, onChange} = this.props;
        return (
            <div className='form-input-container'>
                <FormLabel label={inputLabel}/>
                <textarea value={value}
                          placeholder={placeholder}
                          rows={rows}
                          style={{
                              resize: resize ? 'vertical' : 'none'
                          }}
                          onChange={event => onChange(event.target.value)}/>
            </div>
        );
    }
}

FormTextArea.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    resize: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

FormTextArea.defaultProps = {};