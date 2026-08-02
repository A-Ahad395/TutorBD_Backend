import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateBookingDto {

  @IsOptional()
  @IsString({
    message: 'Message must be a string',
  })
  @MaxLength(255, {
    message: 'Message must not exceed 255 characters',
  })
  message?: string;


  @IsOptional()
  @IsString({
    message: 'Status must be a string',
  })
  @MaxLength(20, {
    message: 'Status must not exceed 20 characters',
  })
  status?: string;

}