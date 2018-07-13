import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchInstagramImagesForUser} from "../actions/instagramActions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        findAllInstagramImagesForUser: () => {
            dispatch(fetchInstagramImagesForUser())
        }
    }
}

class InstagramPhotoList
    extends Component {

    componentDidMount() {
        this.props.findAllInstagramImagesForUser()
    }

    render() {
        return (
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
        );
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(InstagramPhotoList);
