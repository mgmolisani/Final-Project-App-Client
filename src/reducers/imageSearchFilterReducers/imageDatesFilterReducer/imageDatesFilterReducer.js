import {combineReducers} from "redux";

const imageDatesFilterReducer = combineReducers({
    fromDate: imageFromDateFilterReducer,
    toDate: imageToDateFilterReducer
});

export default imageSearchFilterReducer;