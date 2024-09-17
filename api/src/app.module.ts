import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Like } from './like/like.entity';
import { LikeService } from './like/like.service';
import { LikeController } from './like/like.controller';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SECRET } from './user/auth.const';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'cat-pinterest-api-pg',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'cats_db',
      entities: [Like, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Like, User]),
    JwtModule.register({
      global: true,
      secret: SECRET,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  controllers: [LikeController, UserController],
  providers: [LikeService, UserService],
})
export class AppModule {}
