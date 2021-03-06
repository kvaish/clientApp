import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http, private alertCtrl: AlertController) {
    console.log('Hello RequestProvider Provider');
  }

  register(newUser){
    var headers = new Headers;
    headers.append('Content-Type','application/json');
    return this.http.post('http://10.100.1.4:3000/register',newUser,{headers:headers}).map(res=>res.json());
  }

  login(user){
    
    var headers = new Headers;
    headers.append('Authorisation','application/json');
    headers.append('Content-Type','application/json');
    return this.http.post('http://10.100.1.4:3000/login',user,{headers:headers}).map((res)=>res.json());
  }


}
