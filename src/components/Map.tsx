import React, { FC, useState } from "react";
import L from "leaflet";
import { useMap } from "../hooks/useMap";
import { useSetShapes } from "../hooks/useSetShapes";
import { IMap } from "../interfaces/props.interface";

const Map: FC<IMap> = ({ layers, setLayers }) => {
	const [mapState, setMapState] = useState<L.Map | null>(null);

	useMap(setMapState);
	useSetShapes(mapState, layers, setLayers);

	return <div id="map-id" className={"z-0"}></div>;
};

export default Map;
