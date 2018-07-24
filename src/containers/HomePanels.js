import React, {Component} from 'react';
import HomePanelButtons from "../components/home/panels/HomePanelButtons";
import HomePanelCarousel from "../components/home/panels/HomePanelCarousel";

export default class HomePanels
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanelIndex: 0
        };

        this.content = [
            {
                icon: 'bus',
                title: 'Search',
                heading: 'Title goes here'
            },
            {
                icon: 'circle',
                title: 'Private',
                heading: 'Title goes here'
            },
            {
                icon: 'bus-alt',
                title: 'Public',
                heading: 'Title goes here'
            },
            {
                icon: 'bus',
                title: 'Public',
                heading: 'Title goes here'
            }
        ];

        this.changeActivePanel = this.changeActivePanel.bind(this);
    }

    changeActivePanel(panelIndex) {
        this.setState({activePanelIndex: panelIndex})
    }

    render() {
        return (
            <section>
                <HomePanelButtons content={this.content}
                                  activePanelIndex={this.state.activePanelIndex}
                                  onClick={this.changeActivePanel}/>
                <HomePanelCarousel content={this.content}
                                   activePanelIndex={this.state.activePanelIndex}/>
            </section>
        );
    }
}