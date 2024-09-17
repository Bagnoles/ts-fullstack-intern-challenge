import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<{ token: string }> {
    const user = this.userRepository.create(dto);
    const tokenPayload = { sub: user.id, login: user.login };
    return {
      token: await this.jwtService.signAsync(tokenPayload),
    };
  }
}
