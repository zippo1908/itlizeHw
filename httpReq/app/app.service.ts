import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
// tslint:disable-next-line:class-name
export class AppService {
constructor(private httpClient: HttpClient) {
}
public getUsers() {
  return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
}

}



