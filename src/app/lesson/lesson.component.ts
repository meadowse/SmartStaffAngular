import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LessonService } from './lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.less'],
})
export class LessonComponent {
  constructor(public lessonService: LessonService, private router: Router) {}
  arr = <any>[];

  ngOnInit(): void {
    this.lessonService.getAll().subscribe((lesson) => {
      this.arr = lesson;
      this.lessonService.length = this.arr.length;
    });
  }

  exit() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  check() {
    this.router.navigate(['result']);
  }
}
