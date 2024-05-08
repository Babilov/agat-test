import { IShape } from "../interfaces/shape.interface";
import axios from "axios";
import { Dispatch } from "redux";

export const setPoints = () => {
	return async (dispatch: Dispatch) => {
		try {
			const res = await axios.get("/public/shapes.json");
			dispatch({ type: "SET_POINTS", payload: res.data });
		} catch (error) {
			console.error("Failed to fetch shapes:", error);
		}
	};
};

export const addPoint = (payload: IShape) => {
	return {
		type: "ADD_POINT",
		payload,
	};
};

export const removePoint = (payload: number) => {
	return {
		type: "REMOVE_POINT",
		payload,
	};
};
