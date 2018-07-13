import React, {Component} from 'react';
import {fetchInstagramImagesForUser} from "./actions/instagramActions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        findAllInstagramImagesForUser: () => {
            dispatch(fetchInstagramImagesForUser())
        }
    }
}

class App
    extends Component {

    constructor(props) {
        super(props);
        this.scrollX = 0;
    }

    componentDidMount() {
        this.props.findAllInstagramImagesForUser()
    }

    render() {
        return (
            <div className="App">
                <div style={{cursor: this.props.isFetching ? 'wait' : 'default'}}>
                    GET ATTTT MEEEEEE
                </div>

                {this.props.images.map(imageUrl => {
                        return (
                            <div>
                                <img src={imageUrl} height={'250px'}/>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(App);
