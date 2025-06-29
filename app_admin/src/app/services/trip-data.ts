import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '..models/user';
import { AuthReponse } from '../models/auth-reponse'
import { BROWSER_STORAGE } from '../storage';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})

export class TripData {


  constructor(
    private http: HttpClient, 
    @Inject (BROWSER_STORAGE) private storage: Storage,
    baseURL = 'http://localhost:3000/api';
  ) { }
    
  login(user: User, passwd: string) : Observable<AuthReponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  register(user: User, passwd: string) : Observable<AuthReponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthReponse>(this.baseUrl + '/' + endpoint, formData);
  }


  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

}
