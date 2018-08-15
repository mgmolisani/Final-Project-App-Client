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
                {this.props.events.map(event => {
                    return <Link key={event.id}
                                 className='d-block'
                                 style={{
                                     marginTop: 2,
                                     marginBottom: 2,
                                     padding: 2,
                                     backgroundColor: 'rgb(168, 121, 229)'
                                 }}
                                 to={`${this.props.match.url}/event/${event.id}`}>
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

CalendarEventsList.propTypes = {
    date: PropTypes.object.isRequired
};

CalendarEventsList.defaultProps = {};