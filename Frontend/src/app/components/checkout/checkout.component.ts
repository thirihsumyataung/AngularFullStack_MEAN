import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  submitted = false;

  userForm:FormGroup; 
  
  constructor(private formbuilder: FormBuilder) {
    this.userForm = this.formbuilder.group({
      
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],


      email: ['', [Validators.required,Validators.email]],
 
    })}
  ngOnInit(): void {
  }
  submit() {
    this.submitted=true;
    console.log(this.userForm);
  }
  get f() {
    return this.userForm.controls;
  }

}
