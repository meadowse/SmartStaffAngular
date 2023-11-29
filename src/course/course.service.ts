import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { courseEnptity } from './course.entity';
import { Course } from './course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(courseEnptity)
    private readonly courseRepository: Repository<courseEnptity>,
  ) {}

  async getAll(): Promise<courseEnptity[]> {
    return this.courseRepository.find();
  }

  // async get(courseNum: number): Promise<courseEnptity[]> {
  //   return this.courseRepository.find({
  //     where: {
  //       courseNum: courseNum,
  //     },
  //   });
  // }

  async create(courses: Course): Promise<courseEnptity[]> {
    const course = new courseEnptity();
    course.name = courses.name;
    course.cardType = courses.cardType;
    course.cardHeader = courses.cardHeader;
    course.cardText = courses.cardText;
    course.cardV1 = courses.cardV1;
    course.cardV2 = courses.cardV2;
    course.cardV3 = courses.cardV3;
    course.cardV4 = courses.cardV4;
    course.cardV0 = courses.cardV0;

    await this.courseRepository.save(course);
    return await this.courseRepository.find();
  }
}
