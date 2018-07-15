import {combineReducers} from "redux";
import imageTagsFilterReducer from "./imageTagsFilterReducer";

const imageSearchFilterReducer = combineReducers({
    tags: imageTagsFilterReducer,
    dates: imageDatesFilterReducer
});

export default imageSearchFilterReducer;