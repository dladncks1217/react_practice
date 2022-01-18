import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async Join(name: string, email: string, password: string) {
    const newuser = await this.userRepository.findOne({ where: { email } });
    if (newuser) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
      return;
    } else {
      const hashedpassword = await bcrypt.hash(password, 12);
      await this.userRepository.save({
        email,
        name,
        password: hashedpassword,
      });
      return newuser;
    }
  }
}
