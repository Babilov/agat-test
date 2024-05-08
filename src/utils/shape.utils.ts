import L, { LatLngTuple } from "leaflet";
import { IShape } from "../interfaces/shape.interface";
import React, { SetStateAction } from "react";

export const setMarker = (
	shape: IShape,
	mapState: L.Map,
	setLayers: React.Dispatch<SetStateAction<Array<L.Marker | L.Polygon>>>,
) => {
	const marker = L.marker([
		shape.geometry.coordinates[1] as number,
		shape.geometry.coordinates[0] as number,
	])
		.addTo(mapState)
		.bindPopup(shape.properties.name);
	setLayers(prevLayers => [...prevLayers, marker]);
};

export const setPolygon = (
	shape: IShape,
	mapState: L.Map,
	setLayers: React.Dispatch<SetStateAction<Array<L.Marker | L.Polygon>>>,
) => {
	const reversedCords = (shape.geometry.coordinates[0] as number[][]).map(
		innerArray => innerArray.slice().reverse() as LatLngTuple,
	);
	const polygon = L.polygon(reversedCords)
		.addTo(mapState)
		.bindPopup(shape.properties.name);
	setLayers(prevLayers => [...prevLayers, polygon]);
};
