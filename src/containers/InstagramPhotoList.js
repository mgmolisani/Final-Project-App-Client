import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    fetchInstagramImagesForUser,
    hideImageCaptionText,
    selectImage,
    showImageCaptionText,
    unselectImage
} from "../actions/instagramActions";
import '../components/InstagramPhoto.css'
import InstagramPhoto from "../components/InstagramPhoto";

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

    hasFilterTags(image) {
        return this.props.searchFilters.tags.every(tag => {
            return (image.tags.includes(tag));
        })
    }

    inFilterDateRange(image) {
        let createdDate = image.created_time * 1000;
        createdDate = new Date(createdDate);
        let fromDate = new Date(this.props.searchFilters.dates.fromDate);
        let toDate = new Date(this.props.searchFilters.dates.toDate);
        toDate.setDate(toDate.getDate() + 1);
        const parsedCreatedDate = Date.parse(createdDate.toDateString());
        const parsedFromDate = Date.parse(fromDate.toDateString());
        const parsedToDate = Date.parse(toDate.toDateString());
        return parsedFromDate <= parsedCreatedDate && parsedCreatedDate <= parsedToDate;
    }

    render() {
        return (
            <div style={{overflow: 'auto'}} className='test'>
                <div className='row flex-nowrap m-0'>
                    {this.props.imageData.images.reduce((filteredImages, image) => {
                        if (this.hasFilterTags(image) && this.inFilterDateRange(image)) {
                            filteredImages.push(
                                <InstagramPhoto key={image.id}
                                                image={image}
                                                selected={this.props.selectedImages.includes(image.id)}
                                                showCaption={this.props.showCaptionId === image.id}
                                                showImageCaptionText={this.props.showImageCaptionText}
                                                hideImageCaptionText={this.props.hideImageCaptionText}
                                                selectImage={this.props.selectImage}
                                                unselectImage={this.props.unselectImage}/>
                            );
                        }
                        return filteredImages;
                    }, [])
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(InstagramPhotoList);
