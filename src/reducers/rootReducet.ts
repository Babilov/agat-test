import { combineReducers } from "redux";
import shapesReducer from "./shapesReducer";

const rootReducer = combineReducers({
	shapes: shapesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
