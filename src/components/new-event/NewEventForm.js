import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import NewEventActivityList from "./NewEventActivityList";

export default class NewEventForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                name: '',
                description: '',
                address: ''
            },
            activities: [],
            images: []
        };
        this.updateInputField = this.updateInputField.bind(this);
        this.updateActivities = this.updateActivities.bind(this);
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    updateActivities(activities) {
        this.setState({activities});
    }

    render() {
        const {inputFields, activities} = this.state;
        return (
            <div>
                <form>
                    <FormInput label={'Name'}
                               value={inputFields.name}
                               onChange={event => this.updateInputField({name: event.target.value})}/>
                    <FormTextArea label={'Description'}
                                  value={inputFields.description}
                                  rows={4}
                                  resize
                                  onChange={event => this.updateInputField({description: event.target.value})}/>
                    <FormInput label={'Address'}
                               value={inputFields.address}
                               onChange={event => this.updateInputField({address: event.target.value})}/>
                </form>
                <NewEventActivityList activities={activities}
                                      updateActivities={this.updateActivities}
                                      copyOfEvent={inputFields}/>
            </div>
        );
    }
}

NewEventForm.propTypes = {};

NewEventForm.defaultProps = {};