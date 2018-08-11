import React, {Component} from 'react';
import * as CalendarViewTypes from "../../constants/CalendarViewTypes";
import {Button, ButtonGroup} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

export default class EventMenu
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonGroup className='d-flex'>
                <Button onClick={() => this.props.changeViewType(CalendarViewTypes.GRID)}>
                    <FontAwesomeIcon icon={'plus'}/>
                    &nbsp;
                    <FontAwesomeIcon icon={['far', 'calendar']}/>
                </Button>
                <Button onClick={() => this.props.changeViewType(CalendarViewTypes.GRID)}>
                    <FontAwesomeIcon icon={'plus'}/>
                    &nbsp;
                    <FontAwesomeIcon icon={'list'}/>
                </Button>
                <Button onClick={() => this.props.changeViewType(CalendarViewTypes.LIST)}>
                    <FontAwesomeIcon icon={'heart'}/>
                </Button>
            </ButtonGroup>
        );
    }
}

EventMenu.propTypes = {};

EventMenu.defaultProps = {};