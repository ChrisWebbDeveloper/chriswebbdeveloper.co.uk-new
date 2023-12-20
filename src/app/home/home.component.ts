import { Component, Input } from '@angular/core';
import { HomeDetails } from '../models/home-details';
import { NgFor, NgIf } from '@angular/common';
import { Contacts } from '../models/contacts';
import { version } from '../../../package.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() details!: HomeDetails;
  @Input() contacts!: Contacts;
  version: string = version;

  ngOnInit() {
    console.log("Home", this.details);
    console.log("Home", this.contacts);
  }
}
