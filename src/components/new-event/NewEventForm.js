import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import moment from "moment";

export default class NewEventForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                name: '',
                description: '',
                address: '',
                start: moment().format(moment.HTML5_FMT.DATETIME_LOCAL),
                end: moment().add(1, 'hours').format(moment.HTML5_FMT.DATETIME_LOCAL)
            },
            images: []
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
                        New Event
                    </h4>
                    <FormInput label={'Name'}
                               value={inputFields.name}
                               onChange={value => this.updateInputField({name: value})}/>
                    <FormTextArea label={'Description'}
                                  value={inputFields.description}
                                  rows={4}
                                  resize
                                  onChange={value => this.updateInputField({description: value})}/>
                    <FormInput label={'Address'}
                               value={inputFields.address}
                               onChange={value => this.updateInputField({address: value})}/>
                    <FormInput label={'End'}
                               type={'datetime-local'}
                               value={moment(inputFields.start).format(moment.HTML5_FMT.DATETIME_LOCAL)}
                               onChange={value => {
                                   if (value) {
                                       this.updateInputField({start: moment(value).toArray().slice(0, 5)})
                                   }
                               }}/>
                    <FormInput label={'End'}
                               type={'datetime-local'}
                               value={moment(inputFields.end).format(moment.HTML5_FMT.DATETIME_LOCAL)}
                               onChange={value => {
                                   if (value) {
                                       this.updateInputField({end: moment(value).toArray().slice(0, 6)})
                                   }
                               }}/>
                </form>
            </div>
        );
    }
}

NewEventForm.propTypes = {};

NewEventForm.defaultProps = {};