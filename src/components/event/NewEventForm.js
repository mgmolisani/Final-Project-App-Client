import React, {Component} from 'react';
import moment from "moment";
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import EventService from "../../services/EventService";
import {Redirect} from "react-router-dom";
import FormLabel from "../form/FormLabel";
import InviteGuestList from "./InviteGuestList";
import EventPhotoSelectionList from "./EventPhotoSelectionList";
import FormSelect from "../form/FormSelect";

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
                end: moment().add(1, 'hours').format(moment.HTML5_FMT.DATETIME_LOCAL),
                private: true
            },
            selectedImage: '',
            invitedGuests: [],
            redirectEventPage: null
        };
        this.eventService = EventService.instance;
        this.createEvent = this.createEvent.bind(this);
        this.updateInvitedGuests = this.updateInvitedGuests.bind(this);
        this.updateInputField = this.updateInputField.bind(this);
        this.updateSelectedImage = this.updateSelectedImage.bind(this);
    }

    verifyEvent() {
        const {inputFields, selectedImage} = this.state;
        if (Object.values(inputFields).some(input => {
            return !input;
        })
        || !selectedImage) {
            alert('All fields are required to register.');
            return false;
        } else if (moment(inputFields.start).isSameOrAfter(moment(inputFields.end))) {
            alert('Event must start before it ends.');
            return false;
        } else if (moment(inputFields.start).isBefore(moment())) {
            alert('Event cannot be in the past');
            return false;
        } else {
            return true;
        }
    }

    createEvent() {
        const event = {
            eventInfo: {
                ...this.state.inputFields,
                image: this.state.selectedImage,
                start: moment(this.state.inputFields.start).toArray().slice(0, 5),
                end: moment(this.state.inputFields.end).toArray().slice(0, 5)
            },
            invitedGuests: this.state.invitedGuests,
            host: this.props.currentUser._id
        };
        if (this.verifyEvent()) {
            this.eventService
                .createEvent(event)
                .then(newEvent => {
                    this.props.updateCurrentUser(this.props.currentUser._id);
                    this.setState({redirectToEventPage: newEvent._id})
                })
        }
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    updateInvitedGuests(invitedGuests) {
        this.setState({invitedGuests});
    }

    updateSelectedImage(selectedImage) {
        this.setState({selectedImage});
    }

    setVisibility() {
        const {role} = this.props.currentUser;
        switch (role) {
            case 'Private':
                this.updateInputField({private: true});
                break;
            case 'Public':
                this.updateInputField({private: false});
                break;
        }
    }

    componentDidMount() {
        this.setVisibility()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser._id !== prevProps.currentUser._id) {
            this.setVisibility()
        }
    }

    renderCreateButton() {
        return <div className='d-flex justify-content-center my-3'>
            <button className='btn btn-secondary'
                    type={'button'}
                    onClick={() => this.createEvent()}>
                Create Event
            </button>
        </div>
    }

    render() {
        const {event, currentUser} = this.props;
        const {inputFields, redirectToEventPage, selectedImage} = this.state;
        const readOnly = event && currentUser._id && !currentUser.events.hosting.includes(event._id);
        return (
            <div>
                {redirectToEventPage ?
                    <Redirect to={`/event/${redirectToEventPage}`}/> :
                    null}
                <h4 className='text-white mt-3'>
                    {event ? event.name : 'New Event'}
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
                <FormInput label={'Start'}
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
                {currentUser.role === 'Administrator' ?
                    <FormSelect label={'Visibility'}
                                value={inputFields.private ? 'Private' : 'Public'}
                                options={['Private', 'Public']}
                                onChange={value => {
                                    this.updateInputField({private: value === 'Private'})
                                }}/> :
                    null}
                <div className='mt-3'>
                    <FormInput label={'Event Image'}
                               value={selectedImage}
                               onChange={value => this.updateSelectedImage(value)}/>
                    <EventPhotoSelectionList currentUser={currentUser}
                                             selected={this.state.selectedImage}
                                             updateSelectedImage={this.updateSelectedImage}/>
                </div>
                {inputFields.private ?
                    <div>
                        <FormLabel label={'Invite Guests'}/>
                        <InviteGuestList currentUser={currentUser}
                                         invited={this.state.invitedGuests}
                                         updateInvitedGuests={this.updateInvitedGuests}/>
                    </div> :
                    null}
                {this.renderCreateButton()}
            </div>
        );
    }
}