import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import FormLabel from "../form/FormLabel";
import EventSearchResultsItem from "./EventSearchResultsItem";

export default class EventSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'Event Search Results'}/>
                <div className='profile-recent-list'>
                    {this.props.events.map(event => {
                        return <EventSearchResultsItem key={event._id}
                                                       event={event}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

EventSearchResults.propTypes = {};

EventSearchResults.defaultProps = {};