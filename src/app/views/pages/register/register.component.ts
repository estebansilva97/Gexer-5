import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private titulo:Title) { 
    titulo.setTitle('Gexer Registo')
  }

}
