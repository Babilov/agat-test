export interface IShape {
	type: string;
	properties: {
		id: number;
		name: string;
	};
	geometry: {
		type: string;
		coordinates: number[][][] | number[][] | number[];
	};
}
