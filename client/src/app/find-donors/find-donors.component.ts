import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-find-donors',
  standalone: true,
  imports: [RouterLink,RouterOutlet, NavbarComponent],
  templateUrl: './find-donors.component.html',
  styleUrl: './find-donors.component.css'
})
export class FindDonorsComponent {

}
