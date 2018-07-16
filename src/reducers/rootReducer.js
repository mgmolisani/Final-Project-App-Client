import {combineReducers} from "redux";
import imageSearchReducer from "./imageSearchReducer";
import imageDataReducer from "./imageDataReducer";
import imageSelectionReducer from "./imageSelectionReducer";
import imageCaptionReducer from "./imageCaptionReducer";
import imageSearchFilterReducer from "./imageSearchFilterReducers/imageSearchFilterReducer";

/**
 * Combined reducer for all reducers in the app
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    imageSearchFields: imageSearchReducer,
    imageData: imageDataReducer,
    selectedImages: imageSelectionReducer,
    showCaptionId: imageCaptionReducer,
    searchFilters: imageSearchFilterReducer
});

export default rootReducer;