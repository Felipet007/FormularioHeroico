export class Heroe {
	
	constructor(
		public id: number,
		public nombre: string,
		public poder: string,
		public alterEgo?: string //? significa que puede no estar
	){}
}
