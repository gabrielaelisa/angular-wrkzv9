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
    console.warn('Your order has been submitted', this.checkoutForm.value);
    const newDistance= {
      origin : this.checkoutForm.value.origin,
      destination: this.checkoutForm.value.destination,
    } as Distance;

  
    this.registerDistanceService.postDistances(newDistance).subscribe(
        data => {
          window.alert(`Distancia entre ambas direcciones: ${ data.message.distance}`);
    });
    
  
    this.checkoutForm.reset();
    
    
  }

}