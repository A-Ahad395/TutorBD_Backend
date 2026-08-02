import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdatePaymentStatusDto {
  @IsString({
    message: 'Status must be a string',
  })
  @IsNotEmpty({
    message: 'Status is required',
  })
  @MaxLength(20, {
    message: 'Status must not exceed 20 characters',
  })
  status!: string;
}