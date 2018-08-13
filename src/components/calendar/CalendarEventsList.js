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
                {this.props.activities.map(activity => {
                    return <Link className='d-block'
                                 style={{
                                     marginTop: 2,
                                     marginBottom: 2,
                                     padding: 2,
                                     backgroundColor: 'rgb(168, 121, 229)'
                                 }}
                                 to={`${this.props.match.url}/event/${activity.eventId}`}>
                        {moment(activity.start).format('h:mma').slice(0, -1)}
                        <span className='ml-1'>
                            {activity.name}
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