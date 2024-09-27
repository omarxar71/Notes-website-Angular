import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 private readonly _AuthService = inject(AuthService)
registerForm:FormGroup = new FormGroup({
  email: new FormControl(null , [Validators.required]),
  name: new FormControl(null , [Validators.required]),
  password: new FormControl(null , [Validators.required]),
  age: new FormControl(null , [Validators.required]),
  phone: new FormControl(null , [Validators.required]),

})
signUp= ():void=>{
  this._AuthService.register(this.registerForm.value).subscribe({
  next:(res)=>{
    console.log(res)
  } , 
  error:(err)=>{
    console.log(err)
  }
 })
}

}
