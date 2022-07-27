import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class='app-message'>Hello, {{value}}</div><div class='api-message'>{{apiMessage}}</div>`,
})
export class AppComponent implements OnInit {
  value = 'Azure Static Web Apps';
  apiMessage: string = "";

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get("/api/StaticAppHttpTriggerTest").subscribe(
      (response: any) => this.apiMessage = response.text,
      (error: any) => console.error(JSON.stringify(error)));
  }
}
