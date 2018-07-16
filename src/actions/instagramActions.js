import InstagramServiceClient from "../services/instagramService";
import {
    ADD_SEARCH_TAG,
    ADD_SEARCH_TAGS,
    CHANGE_SEARCH_DATE_RANGE,
    CHANGE_SEARCH_FROM_DATE_FIELD,
    CHANGE_SEARCH_TAG_FIELD,
    CHANGE_SEARCH_TO_DATE_FIELD,
    HIDE_IMAGE_CAPTION_TEXT,
    RECEIVE_INSTAGRAM_IMAGES_FOR_USER,
    REMOVE_SEARCH_TAG,
    REQUEST_INSTAGRAM_IMAGES_FOR_USER,
    SELECT_IMAGE,
    SHOW_IMAGE_CAPTION_TEXT,
    UNSELECT_IMAGE
} from "../constants/actionConstants";

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

export function receiveInstagramImagesForUser(imageData) {
    return {
        type: RECEIVE_INSTAGRAM_IMAGES_FOR_USER,
        imageData
    }
}

export function requestInstagramImagesForUser() {
    return {
        type: REQUEST_INSTAGRAM_IMAGES_FOR_USER
    }
}

export function showImageCaptionText(imageId) {
    return {
        type: SHOW_IMAGE_CAPTION_TEXT,
        imageId
    }
}

export function hideImageCaptionText() {
    return {
        type: HIDE_IMAGE_CAPTION_TEXT
    }
}

export function selectImage(imageId) {
    return {
        type: SELECT_IMAGE,
        imageId
    }
}

export function unselectImage(imageId) {
    return {
        type: UNSELECT_IMAGE,
        imageId
    }
}

export function addSearchTags(tags) {
    return {
        type: ADD_SEARCH_TAGS,
        tags
    }
}

export function removeSearchTag(tag) {
    return {
        type: REMOVE_SEARCH_TAG,
        tag
    }
}

export function changeSearchTagField(tag) {
    return {
        type: CHANGE_SEARCH_TAG_FIELD,
        tag
    }
}

export function changeSearchDateRange(fromDate, toDate) {
    return {
        type: CHANGE_SEARCH_DATE_RANGE,
        fromDate,
        toDate
    }
}

export function changeSearchFromDateField(fromDate) {
    return {
        type: CHANGE_SEARCH_FROM_DATE_FIELD,
        fromDate
    }
}

export function changeSearchToDateField(toDate) {
    return {
        type: CHANGE_SEARCH_TO_DATE_FIELD,
        toDate
    }
}