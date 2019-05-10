import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userService: UserService, private cf: FormBuilder, private alertController: AlertController) { }

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.cf.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // User Registration method
  register() {
    this.userService.regsiterUser(this.registerForm.value).subscribe(response => {
      if(response){
        this.presentAlert();
      }
    }, err => {
      console.log('error is: ', err)
    })
  }

  // modal popup for signup success
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registration Succesfull',
      message: 'You are registerd Succesfully.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
