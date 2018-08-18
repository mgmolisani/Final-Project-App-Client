import React, {Component} from 'react';
import moment from "moment";
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import EventService from "../../services/EventService";
import EventPhotoSelectionList from "./EventPhotoSelectionList";
import Avatar from "../user/Avatar";
import EventCommentList from "./EventCommentList";
import {Redirect} from "react-router-dom";
import FollowEventButton from "../buttons/FollowEventButton";

export default class ExistingEventForm
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
            redirectToCalendar: false
        };
        this.eventService = EventService.instance;
        this.updateEvent = this.updateEvent.bind(this);
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

    updateEvent() {
        const event = {
            ...this.state.inputFields,
            start: moment(this.state.inputFields.start).toArray().slice(0, 5),
            end: moment(this.state.inputFields.end).toArray().slice(0, 5),
            image: this.state.selectedImage,
        };
        if (this.verifyEvent()) {
            this.eventService
                .updateEvent(this.props.event._id, event)
                .then(newEvent => {
                    alert('Event has been updated!');
                    this.props.updateEvent(newEvent._id)
                })
        }
    }

    deleteEvent() {
        this.eventService
            .deleteEvent(this.props.event._id)
            .then(() => {
                this.setState({redirectToCalendar: true})
            })
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    updateSelectedImage(selectedImage) {
        this.setState({selectedImage});
    }

    mapEventToFields(event) {
        this.setState({
            inputFields: {
                name: event.name,
                description: event.description,
                address: event.address,
                start: moment(event.start).format(moment.HTML5_FMT.DATETIME_LOCAL),
                end: moment(event.end).format(moment.HTML5_FMT.DATETIME_LOCAL),
                private: event.private
            },
            selectedImage: event.image
        });
    }

    componentDidMount() {
        this.mapEventToFields(this.props.event);
    }

    componentDidUpdate(prevProps) {
        if (this.props.event !== prevProps.event) {
            this.mapEventToFields(this.props.event);
        }
        if (this.state.redirectToCalendar) {
            this.setState({redirectToCalendar: false})
        }
    }

    renderUpdateButton() {
        return <div className='d-flex justify-content-center'>
            <button className='btn btn-secondary' type={'button'}
                    onClick={() => this.updateEvent()}>
                Update Event
            </button>
        </div>
    }

    renderDeleteButton() {
        return <div className='d-flex justify-content-center mt-3'>
            <button className='btn btn-secondary' type={'button'}
                    onClick={() => this.deleteEvent()}>
                Delete Event
            </button>
        </div>
    }

    render() {
        const {event, currentUser} = this.props;
        const {inputFields, selectedImage} = this.state;
        const readOnly = !currentUser._id
            || (currentUser.role !== 'Administrator'
                && !currentUser.events.hosting.includes(event._id));
        return (
            <div>
                {this.state.redirectToCalendar ?
                    <Redirect to={'/calendar'}/> :
                    null}
                <div className='profile-banner'
                     style={{
                         minHeight: 50,
                         minWidth: 50
                     }}>
                    <Avatar avatar={event.image}
                            username={event.name}
                            size={'30vmin'}/>
                    <h3 className='username'>
                        {event.name}
                    </h3>
                    <h5 className='role'>
                        {event.private ? 'Private Event' : 'Public Event'}
                    </h5>
                    <FollowEventButton event={this.props.event}/>
                </div>
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
                {!readOnly ?
                    <div className='mt-3'>
                        <FormInput label={'Event Image'}
                                   value={selectedImage}
                                   onChange={value => this.updateSelectedImage(value)}/>
                        <EventPhotoSelectionList currentUser={currentUser}
                                                 selected={this.state.selectedImage}
                                                 updateSelectedImage={this.updateSelectedImage}/>
                    </div> :
                    null}
                <EventCommentList currentUser={currentUser}
                                  eventId={this.props.event._id}/>
                {!readOnly ?
                    this.renderUpdateButton() :
                    null}
                {!readOnly ?
                    this.renderDeleteButton() :
                    null}
            </div>
        );
    }
}