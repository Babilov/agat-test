import L from "leaflet";

export const createMap = () => {
	const map = L.map("map-id", { zoomControl: false }).setView(
		[51.505, -0.09],
		4,
	);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);
	return map;
};
