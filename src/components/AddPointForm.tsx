import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addPoint } from "../actions/shapesActions";

const AddPointForm = () => {
	const handleAddPoint = () => {
		dispatch(
			addPoint({
				type: "Feature",
				properties: { id: Date.now(), name },
				geometry: {
					type: "Point",
					coordinates: [lat, lon],
				},
			}),
		);
	};

	const [name, setName] = useState<string>("");
	const [lat, setLat] = useState<number>(0);
	const [lon, setLon] = useState<number>(0);

	const dispatch = useDispatch();

	return (
		<div className={"absolute z-10 flex flex-col bg-white p-5 bottom-0 w-72"}>
			<TextField
				label={"Имя"}
				size={"small"}
				onChange={e => setName(e.target.value)}
			/>
			<TextField
				label={"Широта"}
				size={"small"}
				className="mt-2"
				onChange={e => setLat(+e.target.value)}
			/>
			<TextField
				label={"Долгота"}
				size={"small"}
				className="mt-2"
				onChange={e => setLon(+e.target.value)}
			/>
			<Button
				variant={"contained"}
				size={"small"}
				className="mt-2"
				onClick={handleAddPoint}
			>
				Сохранить
			</Button>
		</div>
	);
};

export default AddPointForm;
