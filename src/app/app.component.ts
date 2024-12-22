import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ColorPickerComponent, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-picker';
  color:any;
}
