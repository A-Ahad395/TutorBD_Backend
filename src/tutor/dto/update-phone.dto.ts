import { IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdatePhoneDto {
  @IsNotEmpty()
  @IsNumberString({}, { message: 'Phone must contain only numeric digits.' })
  phone!: string;
}
