import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted = false;

  registerForm:FormGroup; 
  
  constructor(private formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      
      email: ['', [Validators.required,Validators.email]],
      password: ['',[ Validators.required,Validators.minLength(6)]],
      terms: ['', Validators.required],

    }
    )

  }
  ngOnInit(): void {
  }

  register() {
    this.submitted=true;
    console.log(this.registerForm);
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit(){ 
    this.submitted = true; 
  }
  
}
