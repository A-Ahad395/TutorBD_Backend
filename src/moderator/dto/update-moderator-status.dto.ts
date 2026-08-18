import { IsBoolean } from 'class-validator';

export class UpdateModeratorStatusDto {
  @IsBoolean()
  isActive!: boolean;
}