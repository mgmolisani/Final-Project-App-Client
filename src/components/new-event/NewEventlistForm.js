import React, {Component} from 'react';
import FormInput from "../form/FormInput";

export default class NewEventlistForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                name: ''
            },
            events: []
        };
        this.updateInputField = this.updateInputField.bind(this);
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    render() {
        const {inputFields} = this.state;
        return (
            <div className='form-wrapper'>
                <form className='form-container'>
                    <h4 className='text-white mt-3'>
                        New Event List
                    </h4>
                    <FormInput label={'Name'}
                               value={inputFields.name}
                               onChange={value => this.updateInputField({name: value})}/>
                </form>
            </div>
        );
    }
}

NewEventlistForm.propTypes = {};

NewEventlistForm.defaultProps = {};