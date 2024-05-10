import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addPoint } from "../actions/shapesActions";
import { formValidationSchema } from "../utils/formValidationSchema.util";

const AddPointForm = () => {
	const handleAddPoint = async () => {
		try {
			await formValidationSchema.validate(
				{ name, lat, lon },
				{ abortEarly: false },
			);
			setErrors({});
			dispatch(
				addPoint({
					type: "Feature",
					properties: { id: Date.now(), name },
					geometry: {
						type: "Point",
						coordinates: [+lat, +lon],
					},
				}),
			);
			setName("");
			setLat("");
			setLon("");
		} catch (e: any) {
			const validationErrors: { [key: string]: string } = {};
			e.inner.forEach((error: any) => {
				validationErrors[error.path] = error.message;
			});
			setErrors(validationErrors);
		}
	};
	const [name, setName] = useState<string>("");
	const [lat, setLat] = useState<string>("");
	const [lon, setLon] = useState<string>("");
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const dispatch = useDispatch();
	console.log(errors);
	return (
		<div className={"absolute z-10 flex flex-col bg-white p-5 bottom-0 w-72"}>
			<TextField
				value={name}
				label={"Имя"}
				size={"small"}
				onChange={e => setName(e.target.value)}
			/>
			{errors.name && <div className={"text-red-700"}>{errors.name}</div>}
			<TextField
				value={lat}
				label={"Широта"}
				size={"small"}
				className="mt-2"
				onChange={e => setLat(e.target.value)}
			/>
			{errors.lat && <div className={"text-red-700"}>{errors.lat}</div>}
			<TextField
				value={lon}
				label={"Долгота"}
				size={"small"}
				className="mt-2"
				onChange={e => setLon(e.target.value)}
			/>
			{errors.lon && <div className={"text-red-700"}>{errors.lon}</div>}
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
