import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchInstagramImagesForUser} from "../actions/instagramActions";
import './NotScrollViewStyle.css';

function mapDispatchToProps(dispatch, ownProps) {
    return {
        findAllInstagramImagesForUser: () => {
            dispatch(fetchInstagramImagesForUser())
        }
    }
}

class NotScrollView
    extends Component {

    componentDidMount() {
        this.props.findAllInstagramImagesForUser()
    }

    render() {
        return (
            <div style={{overflow: 'auto'}} className='test' onScroll={event => {event.persist(); console.log(event)}}>
                <div className='row flex-nowrap'>
                    {this.props.images.map(imageUrl => {
                            return (
                                <div>
                                    <img src={imageUrl} height={'250px'}/>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(NotScrollView);
