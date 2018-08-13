import React, {Component} from 'react';
import * as DummyData from '../../constants/DummyData';
import {Link, withRouter} from "react-router-dom";

class EventListCard
    extends Component {

    createEventlistImage() {
        const {eventlist} = this.props;
        const event = DummyData.events.find(event => {
            return event.id === eventlist.events[0]
        });
        return <div style={{
            height: '10em',
            width: '10em',
            overflow: 'hidden'
        }}>
            <img src={event.images[0]}
                 alt={''}
                 style={{
                     objectFit: 'cover'
                 }}/>
        </div>
    }

    render() {
        return (
            <div className='event-list-card'>
                {this.createEventlistImage()}
                <h4>
                    <Link to={`${this.props.match.url}/event/${this.props.eventlist.id}`}>
                        {this.props.eventlist.name}
                    </Link>
                </h4>
                <h4 className='text-secondary'>
                    {this.props.eventlist.followers.length} followers
                </h4>
            </div>
        );
    }
}

export default withRouter(EventListCard);

EventListCard.propTypes = {};

EventListCard.defaultProps = {};