import {combineReducers} from "redux";
import imageTagsFilterReducer from "./imageTagsFilterReducer";
import imageDatesFilterReducer from "./imageDatesFilterReducer";

/**
 * Combines the filter reducers
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const imageSearchFilterReducer = combineReducers({
    tags: imageTagsFilterReducer,
    dates: imageDatesFilterReducer
});

export default imageSearchFilterReducer;