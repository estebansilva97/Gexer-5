import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private titulo:Title) { 
    titulo.setTitle('Gexer Inicio')
  }

}
