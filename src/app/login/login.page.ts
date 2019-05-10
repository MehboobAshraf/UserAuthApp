import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService, private cf: FormBuilder, private alertController: AlertController) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.cf.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  // login method
  login() {
    this.userService.login(this.loginForm.value).subscribe(response => {
      if(response.token){
        this.presentAlert();
      }
    }, err => {
      console.log('error is: ', err)
    })
  }

  //modal popup for login success
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login succesfull',
      message: 'You are Logged in Succesfully.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
