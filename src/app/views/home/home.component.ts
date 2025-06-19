import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  personal: Partial<{
    age: Number;
    experience: Number
    orgs: Number
  }> = {};
  constructor() {
    this.personal.age = new Date().getFullYear() - 2001;
    this.personal.experience = 3.7;
    this.personal.orgs = 2;
  }
}
