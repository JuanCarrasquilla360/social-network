import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserFormGroup } from 'src/app/models/user.mode';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registroForm!: IUserFormGroup;
  cargando: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      name:   ['', Validators.required ],
      email:   ['', [Validators.required, Validators.email ] ],
      password: ['', Validators.required ],
    }) as IUserFormGroup;
  }

  crearUsuario(){
    this.cargando = true
    setTimeout(()=>{
      this.cargando = false
      this.router.navigate(['/login']);
    },1000)
  }

}
