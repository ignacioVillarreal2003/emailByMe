import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from './mail.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  datos: FormGroup;

  constructor(private mailService: MailService) {
    this.datos = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]), 
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    });
  }

  enviarCorreo() {
    Notiflix.Loading.circle('Cargando...');
    this.mailService.sendMail(this.datos.value.correo, this.datos.value.asunto, this.datos.value.mensaje).subscribe(
      (response) => {
        console.log(response.message);
        Notiflix.Loading.remove();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
