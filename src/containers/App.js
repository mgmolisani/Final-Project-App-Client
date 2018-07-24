import React, {Component} from 'react';
import {connect} from "react-redux";
import HomeSearch from "../components/home/panels/HomeSearch";

function mapStateToProps(state, ownProps) {
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {}
}

class App
    extends Component {

    render() {
        return (
            <div>
                {/*<HomePanels/>*/}
                <HomeSearch/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
