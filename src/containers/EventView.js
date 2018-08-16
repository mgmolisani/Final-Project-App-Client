import React, {Component} from 'react';
import ContentView from "./ContentView";
import EventForm from "../components/event/EventForm";
import {users} from "../constants/DummyData";
import EventCommentList from "../components/event/EventCommentList";
import FormLabel from "../components/form/FormLabel";
import InvitedGuestList from "../components/event/InvitedGuestList";
import NavigationMenu from "./NavigationMenu";
import EventService from "../services/EventService";

export default class EventView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {},
            comments: []
        };
        this.eventService = EventService.instance;
    }

    fetchEventInfoById() {
        const {eventId} = this.props.match.params;
        Promise.all([
            this.eventService
                .findEventById(eventId),
            this.eventService
                .findAllCommentsForEvent(eventId)])
            .then(values => {
                this.setState({
                    event: values[0],
                    comments: values[1]
                });
            });
    }

    componentDidMount() {
        this.fetchEventInfoById();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.fetchEventInfoById()
        }
    }

    render() {
        return (
                <ContentView>
                    <div className='d-flex flex-column'>
                        <div className='form-wrapper'>
                            <form className='form-container pt-4'>
                                <EventForm event={this.state.event}/>
                                <FormLabel label={'Invited Guests'}/>
                                <InvitedGuestList users={users || this.props.event.invited}/>
                                <FormLabel label={'Comments'}/>
                                <EventCommentList comments={this.state.comments}/>
                            </form>
                        </div>
                    </div>
                </ContentView>
        );
    }
}

EventView.propTypes = {};

EventView.defaultProps = {};