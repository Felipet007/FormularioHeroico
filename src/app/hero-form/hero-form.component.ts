import { Component } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

	poderes = ['Inteligencia sobrehumana', 'Superflexibilidad', 'Combustión espontánea', 'Atmokinesis'];

	modelo = new Heroe(18, 'Tormenta', this.poderes[3], 'Oboro');
	
	submitted = false;
	
	
	
	constructor() { }

	onSubmit() { this.submitted = true; }
	
	get diagnostic() { return JSON.stringify(this.modelo); }

}
