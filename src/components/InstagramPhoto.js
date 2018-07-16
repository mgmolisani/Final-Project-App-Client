import React, {Component} from 'react';
import './InstagramPhoto.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/index.es";
import {faCircle} from "@fortawesome/free-regular-svg-icons/index.es";

export default class InstagramPhoto
    extends Component {

    renderImageCaptionOverlay() {
        if (this.props.showCaption && this.props.image.caption) {
            return <div className='image-overlay-container'>
                <h6 className='text-center m-3 text-white'>
                    {this.props.image.caption.text}
                </h6>
            </div>
        }
    }

    renderImageSelection() {
        return <div className='image-selection p-2'>
            <FontAwesomeIcon icon={this.props.selected ? faCheckCircle : faCircle}
                             size={'lg'}/>
        </div>
    }

    render() {
        const image = this.props.image;
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
                     this.props.selected ?
                         this.props.unselectImage(image.id) :
                         this.props.selectImage(image.id)
                 }}>
                <img src={imageUrl}
                     alt={''}
                     height={'250px'}/>
                {this.renderImageCaptionOverlay()}
                {this.renderImageSelection()}
            </div>
        );
    }
}
