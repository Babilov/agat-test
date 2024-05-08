import React, { FC, SetStateAction } from "react";
import { IShape } from "../interfaces/shape.interface";
import { Button } from "@mui/material";
import { removePoint } from "../actions/shapesActions";
import { useDispatch } from "react-redux";
import { IShapeItem } from "../interfaces/props.interface";

const ShapeItem: FC<IShapeItem> = ({ shape, setLayers, index }) => {
	const dispatch = useDispatch();
	const handleRemovePoint = (id: number) => {
		dispatch(removePoint(id));
		setLayers(prevLayers => {
			const newLayers = [...prevLayers];
			newLayers[index].remove();
			setLayers(prevLayers => prevLayers.filter((_, idx) => idx !== index));
			return newLayers;
		});
	};
	return (
		<div className={"flex justify-between mt-2 items-center"}>
			<div>{shape.properties.name}</div>
			<Button
				variant={"contained"}
				color={"error"}
				size={"small"}
				onClick={() => handleRemovePoint(shape.properties.id)}
			>
				Удалить
			</Button>
		</div>
	);
};

export default ShapeItem;
