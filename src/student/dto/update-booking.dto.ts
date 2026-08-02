import {
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateBookingDto {

  @IsOptional()
  @IsString({
    message: 'Subject must be a string',
  })
  @MaxLength(100, {
    message: 'Subject must not exceed 100 characters',
  })
  subject?: string;

  @IsOptional()
  @IsString({
    message: 'Date must be a string',
  })
  date?: string;

  @IsOptional()
  @IsString({
    message: 'Time slot must be a string',
  })
  @MaxLength(50, {
    message: 'Time slot must not exceed 50 characters',
  })
  timeSlot?: string;

  @IsOptional()
  @IsString({
    message: 'Status must be a string',
  })
  @IsIn(
    [
      'pending',
      'accepted',
      'completed',
      'cancelled',
      'rejected',
    ],
    {
      message:
        'Status must be pending, accepted, completed, cancelled or rejected',
    },
  )
  status?: string;

}