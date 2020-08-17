import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,Product } from '@app/_models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }
    getAll() 
    {
        return this.http.get('../assetfile/Product.json');
    }
}