import React, {Component} from 'react';
import PropTypes from 'prop-types'
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

export default class CalendarMonthSelection
    extends Component {

    constructor(props) {
        super(props);
    }

    moveDateBack() {
        this.props.changeDate(moment(this.props.date).subtract(1, 'months'));
    }

    moveDateForward() {
        this.props.changeDate(moment(this.props.date).add(1, 'months'));
    }

    render() {
        return (
            <div className='p-2'>
                <h5>
                    <span className='m-2'>
                        <FontAwesomeIcon icon={'chevron-left'}
                                         onClick={() => this.moveDateBack()}/>
                    </span>
                    <span className='m-3'>
                        <FontAwesomeIcon icon={'chevron-right'}
                                         onClick={() => this.moveDateForward()}/>
                    </span>
                    <span className='m-2'>
                        {this.props.date.format('MMMM, Y')}
                    </span>
                </h5>
            </div>
        );
    }
}

CalendarMonthSelection.propTypes = {
    date: PropTypes.object.isRequired,
    changeDate: PropTypes.func.isRequired
};

CalendarMonthSelection.defaultProps = {};