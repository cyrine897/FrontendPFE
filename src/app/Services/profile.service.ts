import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://spring.local/sahty/doss'; // URL de votre API backend
 utilisateur :Utilisateur | undefined;
  constructor(private http: HttpClient) { }
  
 


 

 
   
 




}
