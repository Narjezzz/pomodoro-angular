import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
