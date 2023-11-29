import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEnptity } from './user.entity';
import { User } from './user.dto';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userEnptity)
    private readonly userRepository: Repository<userEnptity>,
    private readonly jwtService: JwtService,
  ) {}

  async create(user: User): Promise<userEnptity> {
    console.log(user);
    if (
      await this.userRepository.findOne({
        where: {
          email: user.email,
        },
      })
    ) {
      throw new HttpException(
        'Пользователь с таким email есть',
        HttpStatus.FORBIDDEN,
      );
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(user.password, saltOrRounds);

    const createUser = new userEnptity();
    createUser.email = user.email;
    createUser.password = hash;
    createUser.name = user.name;
    createUser.role = user.role;

    return this.userRepository.save(createUser);
  }

  async getAll(): Promise<userEnptity[]> {
    return this.userRepository.find();
  }

  async get(id: number): Promise<userEnptity[]> {
    return this.userRepository.find({
      where: {
        id: id,
      },
    });
  }

  async signIn(email, password) {
    let user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (await bcrypt.compare(password, user.password)) {
      const payload = { email: email, role: user.role };
      return {
        isLogin: 'true',
        access_token: await this.jwtService.sign(payload, {
          secret: 'qweqwe',
        }),
        // norm: this.jwtService.decode(
        //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdzIxZWFzQHNkZCIsInJvbGUiOiJjaCIsImlhdCI6MTY4Mzg0NTAwNH0.E27HWUPwHR587xqcqMs1ySvE5VGJ6otnLxh4-JhMS8g',
        // ),
      };
    } else {
      throw new HttpException('Неверный пароль', HttpStatus.FORBIDDEN);
    }
  }
}
