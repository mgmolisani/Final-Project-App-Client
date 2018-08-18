import React, {Component} from 'react';
import FormLabel from "./FormLabel";

export default class FormTextArea
    extends Component {

    render() {
        const {label: inputLabel, value, placeholder, rows, resize, readOnly, onChange} = this.props;
        return (
            <div className='form-input-container'>
                <FormLabel label={inputLabel}/>
                <textarea value={value}
                          placeholder={placeholder}
                          rows={rows}
                          readOnly={readOnly}
                          style={{
                              resize: resize ? 'vertical' : 'none'
                          }}
                          onChange={event => onChange(event.target.value)}/>
            </div>
        );
    }
}