import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
submitted = false;

  registerForm:FormGroup; 
  
  constructor(private formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],

      email: ['', [Validators.required,Validators.email]],
      password: ['',[ Validators.required,Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],

    },
    {
        validators:this.Mustmatch('password','confirmpassword')
    }
    )

  }


  ngOnInit(): void {
    
  }

  Mustmatch(controlname:string,matchingcontrolname:string){
    return (formgroup:FormGroup)=>{
      const control=formgroup.controls[controlname];
      const matchingcontrol=formgroup.controls[matchingcontrolname];
      if(matchingcontrol.errors && !matchingcontrol.errors['Mustmatch']){
        return
      }
      if(control.value!==matchingcontrol.value){
        matchingcontrol.setErrors({Mustmatch:true});
      }
      else{
        matchingcontrol.setErrors(null);
      }
    }
  }

  register() {
    this.submitted=true;
    console.log(this.registerForm);
  }
  get f() {
    return this.registerForm.controls;
  }
  
}
