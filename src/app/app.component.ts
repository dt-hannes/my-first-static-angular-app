import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello, {{value}}</div><div>{{apiMessage}}</div>`,
})
export class AppComponent implements OnInit {
  value = 'Azure Static Web Apps';
  apiMessage = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("/api/StaticAppHttpTriggerTest").subscribe(
      (response: any) => this.apiMessage = response.text,
      (error: any) => console.error(JSON.stringify(error)));
  }
}
