import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IShape } from "../interfaces/shape.interface";
import { setPoints } from "../actions/shapesActions";
import { RootState } from "../reducers/rootReducet";
import ShapeItem from "./ShapeItem";
import { ISetLayers } from "../interfaces/props.interface";

const Shapes: FC<ISetLayers> = ({ setLayers }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(setPoints());
	}, [dispatch]);

	const shapes: IShape[] = useSelector(
		(state: RootState) => state.shapes.shapes,
	);
	return (
		<div
			className={"absolute z-10 bg-white p-5 w-72 overflow-y-auto h-[28rem]"}
		>
			{shapes &&
				shapes.map((shape, i) => (
					<ShapeItem
						shape={shape}
						setLayers={setLayers}
						key={shape.properties.id}
						index={i}
					/>
				))}
		</div>
	);
};

export default Shapes;
