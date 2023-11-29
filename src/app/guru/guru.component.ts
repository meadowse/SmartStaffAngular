import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuruService } from './guru.service';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.component.html',
  styleUrls: ['./guru.component.less'],
})
export class GuruComponent {
  constructor(private guruService: GuruService) {}
  isLogin = false;

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  testForm = new FormGroup({
    name: new FormControl(null),
    cardType: new FormControl(null),
    cardHeader: new FormControl(null),
    cardText: new FormControl(null),
    cardV1: new FormControl(null),
    cardV2: new FormControl(null),
    cardV3: new FormControl(null),
    cardV4: new FormControl(null),
    cardV0: new FormControl(null),
  });

  login() {
    this.isLogin = true;
  }
}

export interface Course {
  courseNum: number;
  name: string;
  lessonNum: number;
  cardNum: number;
  cardType: string;
  cardHeader: string;
  cardText: string;
  cardV1: string;
  cardV2: string;
  cardV3: string;
  cardV4: string;
  cardV0: number;
}
