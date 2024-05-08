// import shapes from "../../public/shapes.json";
import { IShape } from "../interfaces/shape.interface";

interface State {
	shapes: IShape[];
}

const initialState: State = {
	shapes: [],
};

const SET_POINTS: string = "SET_POINTS";
const ADD_POINT: string = "ADD_POINT";
const REMOVE_POINT: string = "REMOVE_POINT";

const shapesReducer = (
	state: { shapes: IShape[] } = initialState,
	action: any,
): any => {
	switch (action.type) {
		case SET_POINTS:
			return { ...state, shapes: action.payload };
		case ADD_POINT:
			return { ...state, shapes: [...state.shapes, action.payload] };
		case REMOVE_POINT:
			return {
				...state,
				shapes: state.shapes.filter(
					shape => shape.properties.id !== action.payload,
				),
			};
		default:
			return { ...state };
	}
};

export default shapesReducer;
