import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link, withRouter} from "react-router-dom";
import moment from "moment";

class CalendarEventsList
    extends Component {

    render() {
        return (
            <div style={{
                overflow: 'auto'
            }}>
                {this.props.events.hosting.map(event => {
                    return <Link key={event._id}
                                 className='d-block'
                                 style={{
                                     marginTop: 2,
                                     marginBottom: 2,
                                     padding: 2,
                                     backgroundColor: 'rgb(60, 60, 90)',
                                     overflow: 'hidden',
                                     whiteSpace: 'nowrap',
                                     textOverflow: 'ellipsis'
                                 }}
                                 to={`/event/${event._id}`}>
                        {moment(event.start).format('h:mma').slice(0, -1)}
                        <span className='ml-1'>
                            {event.name}
                        </span>
                    </Link>
                })}
                {this.props.events.following.map(event => {
                    return <Link key={event._id}
                                 className='d-block'
                                 style={{
                                     marginTop: 2,
                                     marginBottom: 2,
                                     padding: '2px 4px',
                                     backgroundColor: 'rgb(60, 90,60)',
                                     overflow: 'hidden',
                                     whiteSpace: 'nowrap',
                                     textOverflow: 'ellipsis'
                                 }}
                                 to={`/event/${event._id}`}>
                        {moment(event.start).format('h:mma').slice(0, -1)}
                        <span className='ml-1'>
                            {event.name}
                        </span>
                    </Link>
                })}
                {this.props.events.invitedTo.map(event => {
                    return <Link key={event._id}
                                 className='d-block'
                                 style={{
                                     marginTop: 2,
                                     marginBottom: 2,
                                     padding: 2,
                                     backgroundColor: 'rgb(90, 60, 60)',
                                     overflow: 'hidden',
                                     whiteSpace: 'nowrap',
                                     textOverflow: 'ellipsis'
                                 }}
                                 to={`/event/${event._id}`}>
                        {moment(event.start).format('h:mma').slice(0, -1)}
                        <span className='ml-1'>
                            {event.name}
                        </span>
                    </Link>
                })}
            </div>
        );
    }
}

export default withRouter(CalendarEventsList);