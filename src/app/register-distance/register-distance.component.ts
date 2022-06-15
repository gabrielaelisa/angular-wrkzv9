import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterDistanceService, Distance } from '../register-distance.service';

@Component({
  selector: 'app-register-distance',
  templateUrl: './register-distance.component.html',
  styleUrls: ['./register-distance.component.css']
})

export class RegisterDistanceComponent {

  checkoutForm = this.formBuilder.group({
    origin: '',
    destination: ''
  });

  distance: number|string= '';

  constructor(
    private registerDistanceService: RegisterDistanceService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
  
    const { origin, destination} = this.checkoutForm.value;

    if(!(origin && destination)){
      window.alert('Debe ingresar ambos valores');
      return; 
    }
    const newDistance= {
      origin : this.checkoutForm.value.origin,
      destination: this.checkoutForm.value.destination,
    } as Distance;

  
    this.registerDistanceService.postDistances(newDistance).subscribe(
      {
        next(data) { 
          window.alert(`Distancia entre ambas direcciones: ${ data.message.distance}`);
        },
        error(err) { 
          window.alert('No se puede calcular la distancia'); 
        },
      }
    );
    
  
    this.checkoutForm.reset();
    
    
  }

}