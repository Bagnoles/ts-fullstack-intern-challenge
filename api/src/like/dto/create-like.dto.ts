import { IsString } from 'class-validator';

export class CreateLikeDto {
  @IsString()
  cat_id: string;

  @IsString()
  created_at: string;
}
