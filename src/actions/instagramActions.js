import InstagramServiceClient from "../services/instagramService";
import {
    ADD_SEARCH_TAGS,
    CHANGE_SEARCH_FROM_DATE,
    CHANGE_SEARCH_FROM_DATE_FIELD,
    CHANGE_SEARCH_TAG_FIELD,
    CHANGE_SEARCH_TO_DATE,
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

/**
 * Get all photos for user
 * @returns {function(*): *}
 */
export function fetchInstagramImagesForUser() {
    return function (dispatch) {
        dispatch(requestInstagramImagesForUser());
        return instagramService
            .findAllImagesForUser(
                images => dispatch(receiveInstagramImagesForUser(images))
            );
    };
}

/**
 * Fires when photos are received
 * @param imageData
 * @returns {{type: string, imageData: *}}
 */
export function receiveInstagramImagesForUser(imageData) {
    return {
        type: RECEIVE_INSTAGRAM_IMAGES_FOR_USER,
        imageData
    }
}

/**
 * Fires when photos are requested
 * @returns {{type: string}}
 */
export function requestInstagramImagesForUser() {
    return {
        type: REQUEST_INSTAGRAM_IMAGES_FOR_USER
    }
}

/**
 * Show an image caption
 * @param imageId
 * @returns {{type: string, imageId: *}}
 */
export function showImageCaptionText(imageId) {
    return {
        type: SHOW_IMAGE_CAPTION_TEXT,
        imageId
    }
}

/**
 * hide an image caption
 * @returns {{type: string}}
 */
export function hideImageCaptionText() {
    return {
        type: HIDE_IMAGE_CAPTION_TEXT
    }
}

/**
 * Select an image
 * @param imageId
 * @returns {{type: string, imageId: *}}
 */
export function selectImage(imageId) {
    return {
        type: SELECT_IMAGE,
        imageId
    }
}

/**
 * Unselect an image
 * @param imageId
 * @returns {{type: string, imageId: *}}
 */
export function unselectImage(imageId) {
    return {
        type: UNSELECT_IMAGE,
        imageId
    }
}

/**
 * Add a search tag
 * @param tags
 * @returns {{type: string, tags: *}}
 */
export function addSearchTags(tags) {
    return {
        type: ADD_SEARCH_TAGS,
        tags
    }
}

/**
 * remove a search tag
 * @param tag
 * @returns {{type: string, tag: *}}
 */
export function removeSearchTag(tag) {
    return {
        type: REMOVE_SEARCH_TAG,
        tag
    }
}

/**
 * Change the search tag field
 * @param tag
 * @returns {{type: string, tag: *}}
 */
export function changeSearchTagField(tag) {
    return {
        type: CHANGE_SEARCH_TAG_FIELD,
        tag
    }
}

/**
 * Change the from date
 * @param fromDate
 * @returns {{type: string, fromDate: *}}
 */
export function changeSearchFromDate(fromDate) {
    return {
        type: CHANGE_SEARCH_FROM_DATE,
        fromDate
    }
}

/**
 * Change the to date
 * @param toDate
 * @returns {{type: string, toDate: *}}
 */
export function changeSearchToDate(toDate) {
    return {
        type: CHANGE_SEARCH_TO_DATE,
        toDate
    }
}

/**
 * Change the from date field
 * @param fromDate
 * @returns {{type: string, fromDate: *}}
 */
export function changeSearchFromDateField(fromDate) {
    return {
        type: CHANGE_SEARCH_FROM_DATE_FIELD,
        fromDate
    }
}

/**
 * Change the to date field
 * @param toDate
 * @returns {{type: string, toDate: *}}
 */
export function changeSearchToDateField(toDate) {
    return {
        type: CHANGE_SEARCH_TO_DATE_FIELD,
        toDate
    }
}