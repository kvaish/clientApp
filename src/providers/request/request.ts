import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RequestProvider {

  constructor(public http: Http, private alertCtrl: AlertController) {
    
  }

  logRequest(newRequest){
    var headers = new Headers();
  	headers.append('Content-Type','application/json');
    return this.http.post('http://10.100.1.4:3000/request',newRequest,{headers:headers}).map(res=>res.json());
  }

  getRequests(status,clientid){
    console.log(status);
    return this.http.get('http://10.100.1.4:3000/getRequests/'+status+'/'+clientid).map(res=>res.json());
  }

  deleteRequest(id:any){
    return this.http.delete('http://10.100.1.4:3000/deleteRequest/'+id).map(res=>res.json());
  }

<<<<<<< HEAD
  updateRequest(id:any){
    return this.http.get('http://localhost:3000/updateRequest/'+id).map(res=>res.json());
=======
  updateRequest(saveRequest){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://10.100.1.4:3000/updateRequest',saveRequest,{headers:headers}).map(res=>res.json());
>>>>>>> 93604d82e32d55bf9a526ae3494c77fdac8ce5e1
  }
  
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
} 
