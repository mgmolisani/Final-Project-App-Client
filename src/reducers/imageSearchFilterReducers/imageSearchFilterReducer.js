import {combineReducers} from "redux";
import imageTagsFilterReducer from "./imageTagsFilterReducer";
import imageDatesFilterReducer from "./imageDatesFilterReducer";

const imageSearchFilterReducer = combineReducers({
    tags: imageTagsFilterReducer,
    dates: imageDatesFilterReducer
});

export default imageSearchFilterReducer;