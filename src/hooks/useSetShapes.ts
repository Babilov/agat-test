import React, { SetStateAction, useEffect } from "react";
import L from "leaflet";
import { IShape } from "../interfaces/shape.interface";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducet";
import { setMarker, setPolygon } from "../utils/shape.utils";

export const useSetShapes = (
	mapState: L.Map | null,
	layers: Array<L.Marker | L.Polygon>,
	setLayers: React.Dispatch<SetStateAction<Array<L.Marker | L.Polygon>>>,
) => {
	const shapes = useSelector((state: RootState) => state.shapes.shapes);
	useEffect(() => {
		if (!mapState) return;

		layers.map(layer => {
			layer.removeFrom(mapState);
		});
		setLayers([]); // удаление при ререндеринге

		shapes.map((shape: IShape) => {
			if (shape.geometry.type === "Point") {
				setMarker(shape, mapState, setLayers);
			} else {
				setPolygon(shape, mapState, setLayers);
			}
			return () => {
				layers.forEach(layer => layer.removeFrom(mapState));
			};
		});
	}, [mapState, shapes]);
};
