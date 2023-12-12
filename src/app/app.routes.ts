import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MoreComponent } from './views/more/more.component';
import { ProjectsComponent } from './views/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'more', component: MoreComponent },
  { path: 'projects', component: ProjectsComponent },
];
