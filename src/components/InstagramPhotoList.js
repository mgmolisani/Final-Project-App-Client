import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    fetchInstagramImagesForUser,
    hideImageCaptionText,
    selectImage,
    showImageCaptionText,
    unselectImage
} from "../actions/instagramActions";
import './InstagramPhoto.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/index.es";
import {faCircle} from "@fortawesome/free-regular-svg-icons/index.es";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        findAllInstagramImagesForUser: () => {
            dispatch(fetchInstagramImagesForUser())
        },
        showImageCaptionText: imageId => {
            dispatch(showImageCaptionText(imageId))
        },
        hideImageCaptionText: () => {
            dispatch(hideImageCaptionText())
        },
        selectImage: imageId => {
            dispatch(selectImage(imageId))
        },
        unselectImage: imageId => {
            dispatch(unselectImage(imageId))
        }
    }
}

class InstagramPhotoList
    extends Component {

    componentDidMount() {
        this.props.findAllInstagramImagesForUser()
    }

    renderImageCaptionOverlay(image) {
        if (image.id === this.props.showCaptionId && image.caption) {
            return <div className='image-overlay-container'>
                <h6 className='text-center m-3 text-white'>
                    {image.caption.text}
                </h6>
            </div>
        }
    }

    renderImageSelection(image) {
        return <div className='image-selection p-2'>
            <FontAwesomeIcon icon={this.props.selectedImages.includes(image.id) ? faCheckCircle : faCircle}
            size={'lg'}/>
        </div>
    }

    render() {
        return (
            <div className='row flex-nowrap m-0'>
                {this.props.imageData.images.map(image => {
                        const imageUrl = image.images.standard_resolution.url;
                        return (
                            <div key={image.id}
                                 style={{
                                     height: 250,
                                     position: 'relative'
                                 }}
                                 onMouseOver={() => {
                                     this.props.showImageCaptionText(image.id)
                                 }}
                                 onMouseLeave={this.props.hideImageCaptionText}
                                 onClick={() => {
                                     this.props.selectedImages.includes(image.id) ?
                                         this.props.unselectImage(image.id) :
                                         this.props.selectImage(image.id)
                                 }}>
                                <img src={imageUrl}
                                     alt={''}
                                     height={'250px'}/>
                                {this.renderImageCaptionOverlay(image)}
                                {this.renderImageSelection(image)}
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
