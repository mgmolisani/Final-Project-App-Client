import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

export default class HomePanelButton
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button type={'button'}
                    active={this.props.active}
                    onClick={this.props.onClick}>
                <h4>
                    <FontAwesomeIcon icon={this.props.icon}
                    className='mr-2'/>
                    {this.props.title}
                </h4>
            </Button>
        );
    }
}

HomePanelButton.propTypes = {
    icon: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

HomePanelButton.defaultProps = {
    active: false
};