import React, {Component} from 'react';
import HomePanel from "./HomePanel";
import './HomePanel.css';
import PropTypes from "prop-types";
import {homePanelContent} from '../../../models/home/panel/content';

export default class HomePanelCarousel
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home-panels-content'>
                <div className='container'>
                    <div className='bg-white'>
                        {this.props.content.map((panel, index) => {
                            return (
                                <HomePanel icon={panel.icon}
                                           heading={panel.heading}
                                           active={index === this.props.activePanelIndex}>
                                    {panel.children}
                                </HomePanel>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

HomePanelCarousel.propTypes = {
    content: homePanelContent.isRequired,
    activePanelIndex: PropTypes.number.isRequired
};

HomePanelCarousel.defaultProps = {};