import React, {Component} from 'react';
import moment from "moment";
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import UserService from "../../services/UserServices";

export default class EventForm
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
            images: [],
            hostedEvents: []
        };
        this.userService = UserService.instance;
        this.updateInputField = this.updateInputField.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
    }

    updateEvent() {
        this.props.updateEvent({
            ...this.state.inputFields,
            images: this.state.images
        });
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    mapEventToFields() {
        const {event} = this.props;
        this.updateInputField({
            ...event,
            start: moment(event.start).format(moment.HTML5_FMT.DATETIME_LOCAL),
            end: moment(event.end).format(moment.HTML5_FMT.DATETIME_LOCAL)
        });
    }

    componentDidMount() {
        if (this.props.event) {
            this.mapEventToFields();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.event &&
            (!prevProps.event || this.props.event.id !== prevProps.event.id)) {
            this.mapEventToFields();
        }
    }

    render() {
        const {event, currentUser} = this.props;
        const {inputFields} = this.state;
        const readOnly = !(currentUser._id && this.state.hostedEvents.includes(event._id));
        return (
            <div>
                <h4 className='text-white mt-3'>
                    {event._id ? event.name : 'New Event'}
                </h4>
                <FormInput label={'Event Name'}
                           value={inputFields.name}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({name: value})}/>
                <FormTextArea label={'Description'}
                              value={inputFields.description}
                              rows={4}
                              resize
                              readOnly={readOnly}
                              onChange={value => this.updateInputField({description: value})}/>
                <FormInput label={'Address'}
                           value={inputFields.address}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({address: value})}/>
                <FormInput label={'End'}
                           type={'datetime-local'}
                           value={moment(inputFields.start).format(moment.HTML5_FMT.DATETIME_LOCAL)}
                           readOnly={readOnly}
                           onChange={value => {
                               if (value) {
                                   this.updateInputField({start: moment(value).toArray().slice(0, 5)})
                               }
                           }}/>
                <FormInput label={'End'}
                           type={'datetime-local'}
                           value={moment(inputFields.end).format(moment.HTML5_FMT.DATETIME_LOCAL)}
                           readOnly={readOnly}
                           onChange={value => {
                               if (value) {
                                   this.updateInputField({end: moment(value).toArray().slice(0, 6)})
                               }
                           }}/>
                </div>
        );
    }
}