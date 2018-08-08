import React, {Component} from 'react';
import {connect} from "react-redux";
import Calendar from "./Calendar";

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
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
            }}>
                <Calendar/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
