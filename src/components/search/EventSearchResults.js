import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import EventSearchResultsItem from "./EventSearchResultsItem";

export default class EventSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'Event Search Results'}/>
                {this.props.events.length > 0 ?
                    <div className='profile-recent-list'>
                        {this.props.events.map(event => {
                            return <EventSearchResultsItem key={event._id}
                                                           event={event}/>
                        })}
                    </div> :
                    <div className='text-white'>
                        No results found for search.
                    </div>}
            </React.Fragment>
        );
    }
}

EventSearchResults.propTypes = {};

EventSearchResults.defaultProps = {};