import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

export default class HomePanel
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`home-panel-container ${this.props.active ? 'active' : ''}`}>
                <div className='home-panel'>
                    <FontAwesomeIcon className='home-panel-icon'
                                     icon={this.props.icon}
                                     size={'6x'}/>
                    <h1>
                        {this.props.heading}
                    </h1>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

HomePanel.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    active: PropTypes.bool
};

HomePanel.defaultProps = {};