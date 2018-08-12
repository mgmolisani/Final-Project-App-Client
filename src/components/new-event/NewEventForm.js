import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormInput from "../form/FormInput";
import NewEventLocationInput from "./NewEventLocationInput";
import FormTextArea from "../form/FormTextArea";

export default class NewEventForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
        };
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    updateName(name) {
        this.setState({name});
    }

    updateDescription(description) {
        this.setState({description});
    }

    render() {
        const {name, description} = this.state;
        return (
            <div>
                <FormInput label={'Name'}
                           value={name}
                           onChange={event => this.updateName(event.target.value)}/>
                <FormTextArea label={'Description'}
                              value={description}
                              rows={4}
                              resize
                              onChange={event => this.updateDescription(event.target.value)}/>
                <NewEventLocationInput/>
            </div>
        );
    }
}

NewEventForm.propTypes = {};

NewEventForm.defaultProps = {};