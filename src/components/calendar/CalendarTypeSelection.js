import React, {Component} from 'react';
import {Button, ButtonGroup} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import * as CalendarViewTypes from "../../constants/CalendarViewTypes";

export default class CalendarTypeSelection
    extends Component {

    render() {
        return (
            <ButtonGroup>
                <Button onClick={() => this.props.changeViewType(CalendarViewTypes.GRID)}>
                    <FontAwesomeIcon icon={['far', 'calendar']}/>
                </Button>
                <Button onClick={() => this.props.changeViewType(CalendarViewTypes.LIST)}>
                    <FontAwesomeIcon icon={'list'}/>
                </Button>
            </ButtonGroup>
        );
    }
}

CalendarTypeSelection.propTypes = {};

CalendarTypeSelection.defaultProps = {};