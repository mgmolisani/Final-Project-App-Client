import React, {Component} from 'react';
import Avatar from "../user/Avatar";

export default class EventPhotoSelectionListitem
    extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {photo} = this.props;
        return (
            <div className='p-3'
                 onClick={this.props.updateSelectedImage}>
                <div>
                    <Avatar avatar={photo.url}
                            username={photo.caption}
                            size={'10em'}
                            className={`instagram-photo-selection ${this.props.selected ? 'selected' : ''}`}/>
                </div>
            </div>
        );
    }
}