import axios from "axios";
import { IShape } from "../interfaces/shape.interface";

export const getShapes = async (): Promise<IShape[] | void> => {
	try {
		const shapes = await axios.get("/shapes.json");
		return shapes.data;
	} catch (e) {
		console.log(e);
	}
};
