import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _AuthService = inject(AuthService)
  logInForm: FormGroup= new FormGroup({
  email : new FormControl(null),
  password : new FormControl(null),

 })  
 login=()=>{
  this._AuthService.signIn(this.logInForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      localStorage.setItem('token',res.token)
      this._AuthService.decodedToken()
      console.log(res.token);
    }, 
    error:(err)=>{
      console.log(err);
      
    }
  })
 }
}
function decoded() {
  throw new Error('Function not implemented.');
}

