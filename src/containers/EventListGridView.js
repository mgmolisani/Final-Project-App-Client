import React, {Component} from 'react';
import * as DummyData from "../constants/DummyData";
import EventListGrid from "../components/event-list-grid/EventListGrid";
import EventView from "./EventView";
import {Route} from "react-router-dom";
import ContentView from "./ContentView";

export default class EventListGridView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventlists: [],
            userId: 1
        }
    }

    fetchEventlistsForUser() {
        const userId = Number.parseInt(this.props.match.params.userId, 10) || this.state.userId;
        const u = DummyData.users.find(user => {
            return user.id === userId;
        });
        const allEventlists = [...u.eventlists.owns, ...u.eventlists.follows]
        const eventlists = DummyData.eventlists.filter(eventlist => {
            return allEventlists.includes(eventlist.id);
        });
        this.setState({eventlists})
    }

    componentDidMount() {
        this.fetchEventlistsForUser()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.fetchEventlistsForUser()
        }
    }

    render() {
        return (
            <ContentView>
                <EventListGrid eventlists={this.state.eventlists}/>
                <Route path={`${this.props.match.url}/event/:eventId`} component={EventView}/>
            </ContentView>
        );
    }
}

EventListGridView.propTypes = {};

EventListGridView.defaultProps = {};