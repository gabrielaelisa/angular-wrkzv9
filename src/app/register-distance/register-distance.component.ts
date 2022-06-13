import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//import { RegisterDistanceService } from '../registerdistance.service';

@Component({
  selector: 'app-register-distance',
  templateUrl: './register-distance.component.html',
  styleUrls: ['./register-distance.component.css']
})
export class RegisterDistanceComponent {

  //items = this.registerDistanceService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    //private registerDistanceService: registerDistanceService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.registerDistanceService.clearregisterdistance();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}