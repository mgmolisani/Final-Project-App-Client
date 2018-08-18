import React, {Component} from 'react';
import ContentView from "./ContentView";
import EventService from "../services/EventService";
import {AuthenticationConsumer} from "./authentication/AuthenticationContext";
import ExistingEventForm from "../components/event/ExistingEventForm";

export default class EventView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        };
        this.eventService = EventService.instance;
        this.updateEvent = this.updateEvent.bind(this);
    }

    fetchEventInfoById() {
        const {eventId} = this.props.match.params;
        if (eventId !== 'new') {
            this.eventService
                .findEventById(eventId)
                .then(event => {
                    this.setState({event});
                });
        }
    }

    updateEvent(eventId) {
        this.fetchEventInfoById(eventId)
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
        const {eventId} = this.props.match.params;
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <ContentView>
                        <div className='d-flex flex-column'>
                            <div className='form-wrapper'>
                                <form className='form-container py-4'>
                                    <AuthenticationConsumer>
                                        {({currentUser}) => {
                                            return <ExistingEventForm event={this.state.event}
                                                                      updateEvent={this.updateEvent}
                                                                      currentUser={currentUser}/>
                                        }}
                                    </AuthenticationConsumer>
                                </form>
                            </div>
                        </div>
                    </ContentView>
                </div>
            </ContentView>
        );
    }
}