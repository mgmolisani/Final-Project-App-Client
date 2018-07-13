import InstagramServiceClient from "../services/instagramService";
import {RECEIVE_INSTAGRAM_IMAGES_FOR_USER, REQUEST_INSTAGRAM_IMAGES_FOR_USER} from "../constants/actionConstants";

const instagramService = InstagramServiceClient.instance;

export function fetchInstagramImagesForUser() {
    return function (dispatch) {
        dispatch(requestInstagramImagesForUser());
        return instagramService
            .findAllImagesForUser(
            images => dispatch(receiveInstagramImagesForUser(images))
        );
    };
}

export function receiveInstagramImagesForUser(images) {
    return {
        type: RECEIVE_INSTAGRAM_IMAGES_FOR_USER,
        images
    }
}

export function requestInstagramImagesForUser() {
    return {
        type: REQUEST_INSTAGRAM_IMAGES_FOR_USER
    }
}

