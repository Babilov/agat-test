import "leaflet/dist/leaflet.css";
import "./style.css";
import AddPointForm from "./components/AddPointForm";
import Shapes from "./components/Shapes";
import Map from "./components/Map";
import { useState } from "react";
import L from "leaflet";
import React from "react";

function App() {
	const [layers, setLayers] = useState<Array<L.Marker | L.Polygon>>([]);
	return (
		<>
			<Shapes setLayers={setLayers} />
			<AddPointForm />
			<Map layers={layers} setLayers={setLayers} />
		</>
	);
}

export default App;
