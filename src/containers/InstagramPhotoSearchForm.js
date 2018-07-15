import React, {Component} from 'react';
import {changeSearchTagField, fetchInstagramImagesForUser} from "../actions/instagramActions";
import {connect} from "react-redux";
import ImageSearchTagField from "../components/ImageSearchTagField";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        changeSearchTagField: tag => {
            dispatch(changeSearchTagField(tag));
        }
    }
}

class InstagramPhotoSearchForm
    extends Component {

    render() {
        return (
            <ImageSearchTagField tagField={this.props.tagField}
                                 changeSearchTagField={this.props.changeSearchTagField}/>
        )
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(InstagramPhotoSearchForm);
