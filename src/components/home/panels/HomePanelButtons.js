import React, {Component} from 'react';
import HomePanelButton from "./HomePanelButton";
import './HomePanel.css';
import {ButtonGroup} from "reactstrap";
import PropTypes from "prop-types";
import {homePanelContent} from "../../../models/home/panel/content";

export default class HomePanelButtons
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home-panels-buttons'>
                <div className='container'>
                    <ButtonGroup className='d-flex w-100'>
                        {this.props.content.map((panel, index) => {
                            return <HomePanelButton icon={panel.icon}
                                                    title={panel.title}
                                                    active={index === this.props.activePanelIndex}
                                                    onClick={() => {
                                                        this.props.onClick(index)
                                                    }}/>
                        })}
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

HomePanelButton.propTypes = {
    content: homePanelContent.isRequired,
    activePanelIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

HomePanelButton.defaultProps = {
};
