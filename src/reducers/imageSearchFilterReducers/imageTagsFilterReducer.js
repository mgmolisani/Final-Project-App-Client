import {ADD_SEARCH_TAGS, REMOVE_SEARCH_TAG} from "../../constants/actionConstants";

/**
 * Reducer for setting tag filters
 * @param state
 * @param action
 * @returns {*}
 */
export default function imageTagsFilterReducer(state = [], action) {
    switch (action.type) {
        case ADD_SEARCH_TAGS:
            return action.tags.split(' ').reduce((tagsArray, tag) => {
                if (tag && !tagsArray.includes(tag)) {
                    tagsArray.push(tag);
                }
                return tagsArray
            }, state);
        case REMOVE_SEARCH_TAG:
            return state.filter(tag => (tag !== action.tag));
        default:
            return state;
    }
}