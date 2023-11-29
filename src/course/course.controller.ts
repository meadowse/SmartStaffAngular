import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { courseEnptity } from './course.entity';
import { Course } from './course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // @Get()
  // getAll(): Promise<courseEnptity[]> {
  //   return this.courseService.getAll();
  // }

  @Post()
  getAll(): Promise<courseEnptity[]> {
    return this.courseService.getAll();
  }

  // @Get(':courseNum')
  // get(@Param('courseNum') courseNum: string): Promise<courseEnptity[]> {
  //   return this.courseService.get(Number(courseNum));
  // }

  @Post()
  create(@Body() courses: Course): Promise<Course[]> {
    return this.courseService.create(courses);
  }
}
