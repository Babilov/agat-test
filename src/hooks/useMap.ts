import { useEffect } from "react";
import { createMap } from "../utils/map.utils";

export const useMap = (setMapState: any) => {
	useEffect(() => {
		const map = createMap();
		setMapState(map);

		return () => {
			if (map) map.remove();
		};
	}, [setMapState]);
};
