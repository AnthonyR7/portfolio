import { Component, OnInit } from '@angular/core';
import { HttpService } from '../https.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  content: any;
  feedBack: any;
  missing: any;
  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.content = {email: '', message: '', subject: ''};
    this.feedBack = '';
    this.missing = ''
  }
  onSubmit() {
    console.log('Here is the data in contact component: ' , this.content);
    const observable = this._http.sendContent({data: this.content});
    observable.subscribe(data => {
      console.log('hello?');
      console.log('Got the data back here in the subscribe', data);
      if (data === true) {
        this.feedBack = data;
        this.missing = [];
      } else {
        this.missing = data;
        this.feedBack = '';
      }
    });

    // this.content = {email: '', message: '', subject: ''};

  }
}
