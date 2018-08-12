import React, {Component} from 'react';
import FormInput from "../form/FormInput";

export default class NewEventActvityListItem
    extends Component {

    constructor(props) {
        super(props);
        console.log(props.activity);
        this.state = {
            inputFields: {...props.activity}
        };
        this.updateInputField = this.updateInputField.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    conponentDidUpdate(prevProps, prevState) {
        if (this.props.activity !== this.props.inputFields) {
            this.setState({inputFields: {...this.props.activity}});
        }
    }


    updateActivity() {
        this.props.updateActivity({
            ...this.props.activity,
            ...this.state.inputFields
        });
    }

    render() {
        const {inputFields} = this.state;
        console.log(this.props.activity);
        console.log(inputFields);
        return (
            <form>
                <FormInput label={'Activty Name'}
                           value={inputFields.name}
                           onChange={event => this.updateInputField({name: event.target.value})}/>
                <button type={'button'}
                        onClick={this.updateActivity}>
                    Update
                </button>
                <button type={'button'}
                        onClick={this.props.deleteActivity}>
                    Delete
                </button>
            </form>
        );
    }
}

NewEventActvityListItem.propTypes = {};

NewEventActvityListItem.defaultProps = {};