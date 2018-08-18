import React, {Component} from 'react';
import EventService from "../../services/EventService";
import AdminEventList from "../../components/admin/AdminEventList";
import {Link} from "react-router-dom";

export default class EventAdminView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.eventService = EventService.instance;
        this.findAllEvents = this.findAllEvents.bind(this);
    }

    findAllEvents() {
        this.eventService
            .findAllEvents()
            .then(events => {
                this.setState({events});
            });
    }

    componentDidMount() {
        this.findAllEvents();
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-secondary m-3'
                            type={'button'}>
                        <Link to={'/event/new'}>
                            Create New Event
                        </Link>
                    </button>
                </div>
                <AdminEventList events={this.state.events}
                                updateList={this.findAllEvents}/>
            </div>
        );
    }
}