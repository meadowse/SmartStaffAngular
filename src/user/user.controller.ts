import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.dto';
import { userEnptity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  getAll(): Promise<userEnptity[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<userEnptity[]> {
    return this.userService.get(Number(id));
  }

  @Post('login')
  signIn(@Body() user: any) {
    return this.userService.signIn(user.email, user.password);
  }
}
