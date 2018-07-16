import {combineReducers} from "redux";
import imageSearchReducer from "./imageSearchReducer";
import imageDataReducer from "./imageDataReducer";
import imageSelectionReducer from "./imageSelectionReducer";
import imageCaptionReducer from "./imageCaptionReducer";
import imageSearchFilterReducer from "./imageSearchFilterReducers/imageSearchFilterReducer";



const rootReducer = combineReducers({
    imageSearchFields: imageSearchReducer,
    imageData: imageDataReducer,
    selectedImages: imageSelectionReducer,
    showCaptionId: imageCaptionReducer,
    searchFilters: imageSearchFilterReducer
});

export default rootReducer;