import React, {Component} from 'react';
import PropTypes from 'prop-types'
import moment from "moment";

export default class CalendarEventsList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                overflow: 'auto'
            }}>
                {this.props.events.map(activity => {
                    return <div style={{
                                    marginTop: 2,
                                    marginBottom: 2,
                                    padding: 2,
                                    backgroundColor: 'rgb(168, 121, 229)'
                                }}>
                        {moment(activity.start).format('h:mma').slice(0, -1)}
                        <span className='ml-1'>
                            {activity.name}
                        </span>
                    </div>
                })}
            </div>
        );
    }
}

CalendarEventsList.propTypes = {
    date: PropTypes.object.isRequired
};

CalendarEventsList.defaultProps = {};