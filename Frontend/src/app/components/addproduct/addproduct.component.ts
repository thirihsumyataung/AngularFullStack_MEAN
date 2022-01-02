import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule  , FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
submitted = false;

  addproductForm:FormGroup; 
  
  constructor(private formbuilder: FormBuilder) {
    this.addproductForm = this.formbuilder.group({
      
      productname: ['',[ Validators.required,Validators.maxLength(64)]],

      department: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],

      productimg: ['', Validators.required],
      productdesc: ['',[ Validators.required,Validators.minLength(20)]],
      terms: ['', Validators.required]

    },
   
    )}
  ngOnInit(): void {
  }
  register() {
    this.submitted=true;
    console.log(this.addproductForm);
  }
  get f() {
    return this.addproductForm.controls;
  }

}
