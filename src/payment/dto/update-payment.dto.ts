import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdatePaymentDto {
  @IsNumber(
    {},
    {
      message: 'Student ID must be a number',
    },
  )
  @IsOptional()
  studentId?: number;

  @IsNumber(
    {},
    {
      message: 'Tutor ID must be a number',
    },
  )
  @IsOptional()
  tutorId?: number;

  @IsNumber(
    {},
    {
      message: 'Amount must be a number',
    },
  )
  @IsOptional()
  amount?: number;

  @IsString({
    message: 'Payment method must be a string',
  })
  @MaxLength(50, {
    message: 'Payment method must not exceed 50 characters',
  })
  @IsOptional()
  paymentMethod?: string;

  @IsString({
    message: 'Transaction ID must be a string',
  })
  @MaxLength(100, {
    message: 'Transaction ID must not exceed 100 characters',
  })
  @IsOptional()
  transactionId?: string;
}