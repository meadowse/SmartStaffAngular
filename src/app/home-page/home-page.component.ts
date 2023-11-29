import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomePageService } from './home-page.service';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {
  constructor(
    public homePageService: HomePageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.checkNetworkStatus();
    if (localStorage.getItem('login')) {
      this.router.navigate(['/lesson']);
    }
  }
  networkStatus: boolean = false;
  lottieOptions: AnimationOptions = {
    path: 'assets/img/img.json',
    loop: true,
    autoplay: true,
  };
  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
  }

  login() {
    if (
      this.loginForm.controls.email.value !== null &&
      this.loginForm.controls.password.value
    ) {
      let res = this.homePageService.login(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      );
    }
  }
}
