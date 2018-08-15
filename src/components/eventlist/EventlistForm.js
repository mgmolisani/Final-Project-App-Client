import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import withLogin from "../utils/withLogin";

class EventlistForm
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

    mapEventlistToFields() {
        const {eventlist} = this.props;
        this.updateInputField({
            ...eventlist,
        });
    }

    componentDidMount() {
        if (this.props.eventlist) {
            this.mapEventlistToFields();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.eventlist &&
            (!prevProps.eventlist || this.props.eventlist.id !== prevProps.eventlist.id)) {
            this.mapEventlistToFields();
        }
    }

    render() {
        const {eventlist, currentUser} = this.props;
        const {inputFields} = this.state;
        const readOnly = eventlist && currentUser._id && eventlist.owner !== currentUser._id;
        return (
            <React.Fragment>
                <h4 className='text-white mt-3'>
                    {eventlist ? eventlist.name : 'New Event List'}
                </h4>
                <FormInput label={'Event List Name'}
                           value={inputFields.name}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({name: value})}/>
            </React.Fragment>
        );
    }
}

export default withLogin(EventlistForm);

EventlistForm.propTypes = {};

EventlistForm.defaultProps = {};