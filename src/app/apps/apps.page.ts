import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';
import { ApplicationsService } from './services/applications.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

  applications$ : Observable<Application[]>;

  constructor(private applications : ApplicationsService) { }

  ngOnInit() {
    this.applications$ = this.applications.findAll();
  }
}
