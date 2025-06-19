import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navActive: boolean = false;
  @Output() navState = new EventEmitter<boolean>(this.navActive);
  navRoutes: Array<{
    name: string;
    path: string;
    icon: string;
  }> = [
    {
      name: 'about',
      path: '/',
      icon: 'person_4',
    },
    {
      name: 'work',
      path: '/work',
      icon: 'tactic',
    },
  ];
  toggleNav() {
    this.navActive = !this.navActive;
    this.navState.emit(this.navActive);
  }
}
