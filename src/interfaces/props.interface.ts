import { IShape } from "./shape.interface";
import L from "leaflet";
import React, { SetStateAction } from "react";

export interface ISetLayers {
	setLayers: React.Dispatch<SetStateAction<Array<L.Marker | L.Polygon>>>;
}

export interface IMap extends ISetLayers {
	layers: (L.Marker | L.Polygon)[];
}

export interface IShapeItem extends ISetLayers {
	shape: IShape;
	index: number;
}
