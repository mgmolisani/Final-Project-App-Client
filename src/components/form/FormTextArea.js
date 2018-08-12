import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormInput from "./FormInput";

export default class FormTextArea
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label: inputLabel, value, placeholder, rows, resize, onChange} = this.props;
        return (
            <div>
                <label>
                    {inputLabel}
                </label>
                <textarea value={value}
                          placeholder={placeholder}
                          rows={rows}
                          style={{
                              resize: resize ? 'vertical' : 'none'
                          }}
                       onChange={onChange}/>
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