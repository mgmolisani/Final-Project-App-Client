import React, {Component} from 'react';
import ContentView from "./ContentView";

export default class HomeView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentView>
                HomeView has successfully been created.
            </ContentView>
        );
    }
}
