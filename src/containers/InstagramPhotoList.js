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

    /**
     * Checks if the image has the tags in the filter list
     * @param image
     * @returns {boolean}
     */
    hasFilterTags(image) {
        return this.props.searchFilters.tags.every(tag => {
            return (image.tags.includes(tag));
        })
    }

    /**
     * Checks if the image is in the date range
     * @param image
     * @returns {boolean}
     */
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
            <div>
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
                <h3>
                    There are {this.props.selectedImages.length} photos selected.
                    <br/>
                    Their IDs are:
                    <br/>
                    {this.props.selectedImages.map(id => {
                        return <p>
                            {id}
                        </p>
                    })}
                </h3>
                <p>
                    A very simple API showcase. This will be a sample of how a user might select photos from their own
                    Instagram library to add photos to their events page or to their profile page to showcase what they
                    do and what their events are about.
                </p>
                <p>
                    This demonstration uses a static token given to my Instagram account. In a future iteration, this
                    token will be received through GET/POST requests and stored per user and appended to the request
                    when required. It unfortunately requires an instagram account which I am not certain the TAs have
                    one active for realistic testing. I will
                    create a default account when the final project is due. It is unfortunate as because of recent
                    social media problems, social media APIs all kind of went on lockdown in April. This makes pulling
                    even public
                    data very difficult which was my first alternative. Hopefully, this is sufficient at this stage.
                </p>
                <ul>
                    For now, my photos should be enough.
                    <li>Add tags separated by spaces in the tags field and click add to add tags. Tags will only every
                        appear once and the post needs to have all the tags to appear on the photo slider</li>
                    <li>Remove tags from the tags list on the right.</li>
                    <li>Change dates to only show ones between certain dates.</li>
                    <li>Select a photo to add by clicking on it. It will add a check to it (required part of this
                        assignment) and show underneath it got
                        added to the list (only shown for this assignment interface as proof). Click again to remove it.
                    </li>
                    <li>
                        Hovering over a photo further queries the database (required for this assignment) to show its
                        caption if it exists
                    </li>
                </ul>

                <p>
                    To help TAs with testing, try adding/removing one at a time the tags "tbt" and "2017" and using
                    times that include the year
                    2012-2014 or 2018 but not both. There is a large gap in my own Instagram use so this will help with
                    separating them to show it works.
                </p>
            </div>
        );
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(InstagramPhotoList);
