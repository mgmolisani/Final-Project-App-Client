import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CalendarEventsList from "./CalendarEventsList";

export default class CalendarDay
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='calendar-cell d-flex flex-column'
                 style={{
                     backgroundColor: this.props.disabled ? 'black' : 'default'
                 }}>
                <h5 className='m-2'>
                    {this.props.date.date()}
                </h5>
                {!this.props.disabled && <CalendarEventsList date={this.props.date}
                                                             activities={this.props.activities}/>}
            </div>
        );
    }
}

CalendarDay.propTypes = {
    date: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired
};

CalendarDay.defaultProps = {};