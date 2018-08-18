import React, {Component} from 'react';
import InstagramService from "../../services/InstagramService";
import EventPhotoSelectionListitem from "./EventPhotoSelectionListitem";

export default class EventPhotoSelectionList
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
        this.instagramService = InstagramService.instance;
    }

    fetchUsersInstagramPhotos() {
        if (this.props.currentUser.instagramAccessToken) {
            this.instagramService
                .findInstagramPhotos(this.props.currentUser.instagramAccessToken)
                .then(response => {
                    this.setState({
                        photos: response.data.map(image => {
                            return {
                                url: image.images.standard_resolution.url,
                                caption: image.caption ? image.caption.text : ''
                            }
                        })
                    });
                });
        }
    }

    componentDidMount() {
        this.fetchUsersInstagramPhotos()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser._id !== prevProps.currentUser._id) {
            this.fetchUsersInstagramPhotos()
        }
    }

    render() {
        console.log(this.props.selected);
        return (
            <div className='profile-recent-list d-flex flex-wrap justify-content-center'>
                {this.state.photos.map(photo => {
                    return <EventPhotoSelectionListitem key={photo.url}
                                                        photo={photo}
                                                        selected={this.props.selected === photo.url}
                                                        updateSelectedImage={() => this.props.updateSelectedImage(photo.url)}/>
                })}
            </div>
        );
    }
}