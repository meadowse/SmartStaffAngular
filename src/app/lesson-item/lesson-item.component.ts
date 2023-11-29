import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LessonService } from '../lesson/lesson.service';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.less'],
})
export class LessonItemComponent {
  constructor(public lessonService: LessonService) {}

  @Input()
  test: any;

  ok = false;
  no = false;

  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });

  stat() {
    if (Number(this.testForm.controls.testValue.value) === this.test.cardV0) {
      this.ok = true;
      this.lessonService.score += 1;
    } else {
      this.no = true;
    }
  }
}
