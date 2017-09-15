import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/Storage'; 
//import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private storage:Storage;
  loading: Loading;
  email:string;
  password:string;
 
 
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,storage:Storage) { 
                this.storage = storage;
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  login(){
    const user = {
      email:this.email,
      password:this.password
    }
    this.auth.login(user).subscribe((data)=>{
     
    this.storage.set('name',data.username);
      if(data.username){
        if(data != 'err'){

          this.showLoading();
          this.nav.setRoot('HomeTabPage');
        }
        else{
          this.showError('Failed');
        }
      }
    },(err)=>console.log(err));
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    
 
    let alert = this.alertCtrl.create({
      title: '<b>' +'Bummer!!' + '<b>' + '<br>',
      subTitle: 'Incorrect Username and Password.' + '<br>'+ 'Click '  + '<b>' + 'OK' + '</b>'+ ' to go back to the Login Page.' ,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
