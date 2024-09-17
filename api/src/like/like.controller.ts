import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get()
  getAllLikes() {
    return this.likeService.getAllLikes();
  }

  @Post()
  createLike(@Body() body: CreateLikeDto) {
    return this.likeService.createLike(body);
  }

  @Delete('/:cat_id')
  deleteLike(@Param('cat_id') id: string) {
    return this.deleteLike(id);
  }
}
