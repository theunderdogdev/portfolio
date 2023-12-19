import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private _http: HttpClient) {}
  getRepos<T>() {
    return this._http.get<T>(
      'https://api.github.com/users/theunderdogdev/repos'
    );
  }
  extractOnly<T>(data: Record<string, any>[], keys: string[]) {
    return data.reduce((repos: Array<T>, repoData) => {
      const repo: T = {} as T;
      keys.forEach((key) => {
        repo[key as keyof T] = repoData[key];
      });
      repos.push(repo);
      return repos;
    }, []);
  }
}
export type Repo = {
  id: number;
  commits_url: string;
  topics: string[];
  updated_at: string;
  url: string;
};
