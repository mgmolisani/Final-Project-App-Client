import React, {Component} from 'react';
import ChoosableEventsListItem from "./ChoosableEventsListItem";

export default class ChoosableEventsList
    extends Component {

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.events.map(event => {
                    return <ChoosableEventsListItem key={event.id}
                                                    event={event}/>
                })}
            </div>
        );
    }
}

ChoosableEventsList.propTypes = {};

ChoosableEventsList.defaultProps = {};