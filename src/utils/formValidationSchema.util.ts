import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
	name: Yup.string().required("Название обяазтельно"),
	lat: Yup.number()
		.typeError("Широта должна быть числом")
		.required("Укажите широту")
		.min(-90, "Широта должна быть >= -90")
		.max(90, "Широта должна быть <= 90"),
	lon: Yup.number()
		.typeError("Долгота должна быть числом")
		.required("Укажите долготу")
		.min(-180, "Долгота должна быть >= -180")
		.max(180, "Долгота должна быть <= 180"),
});
