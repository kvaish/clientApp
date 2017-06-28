import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user:{
    email:string,
    password:string
  }
  createSuccess = false;
  email:string;
  password:string;
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) { }
 
  register(){
    const newUser = {
      email:this.email,
      password:this.password
    }
    this.auth.register(newUser).subscribe((user)=>{
      if(user == 'done'){
        let text  = 'Congratulations! Time to Login now.';
        let title = 'Registered Successfully';
        this.showPopup(title, text);
        this.nav.setRoot('LoginPage');
      }
      else{
        this.showPopup('Failed','Please Try Again!');
      }
    });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  
}