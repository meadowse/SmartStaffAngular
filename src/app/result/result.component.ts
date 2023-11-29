import { Component } from '@angular/core';
import { LessonService } from '../lesson/lesson.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less'],
})
export class ResultComponent {
  constructor(public lessonService: LessonService) {}
}
