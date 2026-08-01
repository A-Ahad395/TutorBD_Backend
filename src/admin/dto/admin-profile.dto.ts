import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUrl,
  Matches,
} from 'class-validator';

export class AdminProfileDto {
  @IsString({
    message: 'Name must be a string',
  })
  @IsNotEmpty({
    message: 'Name is required',
  })
  @Matches(/^[^0-9]+$/, {
    message: 'Name must not contain any number',
  })
  name!: string;

  @IsString({
    message: 'Password must be a string',
  })
  @IsNotEmpty({
    message: 'Password is required',
  })
  @Matches(/[@#$&]/, {
    message: 'Password must contain @, #, $ or &',
  })
  password!: string;

  @IsNotEmpty({
    message: 'Date is required',
  })
  @IsDateString(
    {},
    {
      message: 'Date must be a valid date',
    },
  )
  date!: string;

  @IsNotEmpty({
    message: 'Social link is required',
  })
  @IsUrl(
    {},
    {
      message: 'Social link must be a valid URL',
    },
  )
  socialLink!: string;
}