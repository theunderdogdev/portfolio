import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
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
    accent: string;
  }> = [
    {
      name: 'home',
      path: '/',
      icon: 'person_4',
      accent: '59, 130, 246',
    },
    {
      name: 'more',
      path: '/more',
      icon: 'receipt_long',
      accent: '33, 196, 93',
    },
    {
      name: 'projects',
      path: '/projects',
      icon: 'tactic',
      accent: '244, 63, 94',
    },
  ];
  toggleNav() {
    this.navActive = !this.navActive;
    this.navState.emit(this.navActive);
  }
}
