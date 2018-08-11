import React, {Component} from 'react';
import PropTypes from 'prop-types'
import moment from "moment/moment";

export default class EventActivityList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                overflow: 'auto'
            }}>
                {this.props.activities.map(activity => {
                    return <div className='event-sidebar-activity p-3'>
                        <div className='d-flex justify-content-between'>
                            <h5>
                                {activity.name}
                            </h5>
                            <h5>
                                {moment(activity.start).format('h:mma').slice(0, -1)}
                            </h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                {activity.description}
                            </div>
                            <div>
                                {moment(activity.end).format('h:mma').slice(0, -1)}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

EventActivityList.propTypes = {};

EventActivityList.defaultProps = {};