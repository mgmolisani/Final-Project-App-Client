import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormLabel from "./FormLabel";

export default class FormSelect
    extends Component {

    render() {
        const {label: inputLabel, value, options, onChange} = this.props;
        return (
            <div className='form-input-container'>
                <FormLabel label={inputLabel}/>
                <select value={value}
                        onChange={event => onChange(event.target.value)}>
                    {options.map(option => {
                        return <option>
                            {option}
                        </option>
                    })}
                </select>
            </div>
        );
    }
}

FormSelect.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
};

FormSelect.defaultProps = {};