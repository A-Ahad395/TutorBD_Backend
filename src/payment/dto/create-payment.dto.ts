import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNumber(
    {},
    {
      message: 'Student ID must be a number',
    },
  )
  @IsNotEmpty({
    message: 'Student ID is required',
  })
  studentId!: number;

  @IsNumber(
    {},
    {
      message: 'Tutor ID must be a number',
    },
  )
  @IsNotEmpty({
    message: 'Tutor ID is required',
  })
  tutorId!: number;

  @IsNumber(
    {},
    {
      message: 'Amount must be a number',
    },
  )
  @IsNotEmpty({
    message: 'Amount is required',
  })
  amount!: number;

  @IsString({
    message: 'Payment method must be a string',
  })
  @IsNotEmpty({
    message: 'Payment method is required',
  })
  @MaxLength(50, {
    message: 'Payment method must not exceed 50 characters',
  })
  paymentMethod!: string;

  @IsString({
    message: 'Transaction ID must be a string',
  })
  @MaxLength(100, {
    message: 'Transaction ID must not exceed 100 characters',
  })
  transactionId!: string;
}