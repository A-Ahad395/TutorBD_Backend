import {
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateAdminStatusDto {
  @IsNotEmpty()
  @IsBoolean()
  isActive!: boolean;
}