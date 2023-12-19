import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [];

  currId: number = 0;
  private subs: Subscription[] = []
  constructor(private _projService: ProjectService) {}
  getProject(id: number, href: string) {
    this.currId = id;
    console.log(id, href);
  }
  ngOnInit(): void {
    this.subs.push(
    this._projService.getRepos<Record<string, any>[]>().subscribe((data) => {
      this.projects = this._projService.extractOnly<Project>(data, [
        'id',
        'topics',
        'updated_at',
        'html_url',
        'description',
        'language',
        'stargazers_count',
        'name',
      ]);
      this.currId = this.projects[0].id;
    }));
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
export type Project = {
  id: number;
  topics: string[];
  updated_at: string;
  html_url: string;
  decription: string;
  language: string;
  stargazers_count: number;
  name: string;
};
