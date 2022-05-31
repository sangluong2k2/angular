import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';

@Injectable({
    providedIn: "root"
})
export class UserServices {
    API_URL: string = "http://localhost:3001/users"
    constructor(private http:HttpClient) { }

    signUp(user: any){}
    signIn(){}
}