import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { courseEnptity } from './course.entity';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  imports: [TypeOrmModule.forFeature([courseEnptity])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
