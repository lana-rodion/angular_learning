import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  private _trainData: any;
  public get trainData() {
    return this._trainData;
  }
  public set trainData(value) {
    this._trainData = value;
  }

  // parameter http: HttpClient = the single instance of the HttpClient class
  constructor(private http: HttpClient) { }

  // Method get(url) of the HttpClient class. subscribe() is the Observable
  ngOnInit() {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    .subscribe(
      (value) => this.trainData = value
    )
    
    // timer() is RxJS operator which emits after 1 second, then every 2 seconds
    // create an observable with .subscribe(observer)
    timer(1000, 2000)
    .pipe(
      map((number) => number + 1)
    )
    .subscribe((number) => console.log(number));
  }

}
