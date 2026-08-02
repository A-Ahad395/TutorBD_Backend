import { IsString, IsNotEmpty } from 'class-validator';

export class RejectPostDto {
  @IsString()
  @IsNotEmpty()
  reason!: string;
}