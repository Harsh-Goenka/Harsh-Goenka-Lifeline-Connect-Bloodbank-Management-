import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-donor-registration',
  standalone: true,
  imports: [RouterLink,RouterOutlet, NavbarComponent],
  templateUrl: './donor-registration.component.html',
  styleUrl: './donor-registration.component.css'
})
export class DonorRegistrationComponent {

}
