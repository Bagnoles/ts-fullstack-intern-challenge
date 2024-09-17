import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './like.entity';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  async createLike(dto: CreateLikeDto): Promise<Like> {
    const like = this.likeRepository.create(dto);
    return this.likeRepository.save(like);
  }

  async getAllLikes(): Promise<Like[]> {
    return this.likeRepository.find();
  }

  async deleteLike(cat_id: string): Promise<void> {
    const like = await this.likeRepository.findOneBy({ cat_id });
    if (!like) {
      throw new NotFoundException(`Like with cat ID ${cat_id} not found`);
    }
    await this.likeRepository.delete({ cat_id });
  }
}
