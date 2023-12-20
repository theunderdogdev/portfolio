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
  private subs: Subscription[] = [];
  constructor(private _projService: ProjectService) {}
  getProject(evt: Event) {
    evt.stopPropagation();
    const el = <HTMLButtonElement>evt.currentTarget;
    el.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    const name = el.getAttribute('data-name');
    const id = el.getAttribute('data-id');
    console.log(name, id);
    if (id !== null) {
      this.currId = parseInt(id);
    }
  }
  ngOnInit(): void {
    this.subs.push(
      this._projService.getRepos<Record<string, any>[]>().subscribe((data) => {
        console.log(data[0]);
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
        console.log(this.projects[0]);
      })
    );
    this.setWidth();
    window.addEventListener('resize', this.setWidth);
  }
  setWidth(){
    const el = document.querySelector<HTMLDivElement>('.project-detail');
      console.log(el)
      if (el) {
        const maxR = Math.max(el.clientWidth, el.clientHeight);
        el.style.setProperty('--width', `${maxR}px`);
      }
  }
  setProps(evt: MouseEvent) {
    const el = <HTMLDivElement>evt.currentTarget;
    console.log(evt.clientX - el.clientLeft);
    const xPos = evt.clientX - el.clientLeft;
    const yPos = evt.clientY - el.clientTop;
    el.style.setProperty('--x', xPos + 'px');
    el.style.setProperty('--y', yPos + 'px');
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
    
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
