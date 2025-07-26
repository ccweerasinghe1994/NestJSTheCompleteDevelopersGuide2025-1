import { IsString } from 'class-validator';

export class CreateMessageRequestDto {
  @IsString({ message: 'Content must be a string' })
  content: string;
}
