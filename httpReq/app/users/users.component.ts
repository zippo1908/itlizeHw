import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
// tslint:disable-next-line:class-name

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'node';
  repos;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUsers().subscribe((response) => {
      this.repos = response;
      console.log(this.repos);
    });
  }
}
