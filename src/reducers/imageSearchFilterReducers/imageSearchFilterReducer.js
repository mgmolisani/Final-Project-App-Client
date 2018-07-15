import {combineReducers} from "redux";

const imageSearchFilterReducer = combineReducers({
    tags: imageTagsFilterReducer,
    dates: imageDatesFilterReducer
});

export default imageSearchFilterReducer;