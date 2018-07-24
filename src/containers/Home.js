import React, {Component} from 'react';
import {connect} from "react-redux";

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
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
