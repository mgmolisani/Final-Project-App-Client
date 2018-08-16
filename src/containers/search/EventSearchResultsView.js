import React, {Component} from 'react';
import * as queryString from "query-string";
import EventSearchResults from "../../components/search/EventSearchResults";
import EventService from "../../services/EventService";

export default class EventSearchResultsView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.eventService = EventService.instance;
    }

    findMatchingEvents(search) {
        this.eventService
            .searchForEvent(search)
            .then(events => {
                this.setState({events});
            });
    }

    componentDidMount() {
        const search = queryString.parse(this.props.location.search);
        this.findMatchingEvents(search);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const search = queryString.parse(this.props.location.search);
            this.findMatchingEvents(search);
        }
    }

    render() {
        return (
            <EventSearchResults events={this.state.events}/>
        );
    }
}

EventSearchResultsView.propTypes = {};

EventSearchResultsView.defaultProps = {};