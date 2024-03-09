import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup , FormControl, ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

registerForm:FormGroup = new FormGroup({
  first_name:new FormControl (null , [Validators.minLength(3) , Validators.maxLength(100) , Validators.required]),
  last_name: new FormControl (null , [Validators.minLength(3) , Validators.maxLength(100) , Validators.required]),
  age: new FormControl (null, [Validators.min(16) , Validators.max(100) , Validators.required]),
  email: new FormControl (null, [Validators.required , Validators.email]),
  password: new FormControl (null , [Validators.required ,  Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
})
 
submitRegisterForm(registerForm:FormGroup){
console.log(registerForm.value);
}

}
