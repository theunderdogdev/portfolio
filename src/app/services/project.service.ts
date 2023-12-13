import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) {

   }
   getRepos(){
    return this._http.get('');
   }
}
