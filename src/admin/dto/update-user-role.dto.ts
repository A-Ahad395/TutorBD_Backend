import {
  IsIn,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateUserRoleDto {
  @IsString({
    message: 'Role must be a string',
  })
  @IsNotEmpty({
    message: 'Role is required',
  })
  @IsIn(['Student', 'Tutor', 'Moderator', 'Admin'], {
    message: 'Role must be Student, Tutor, Moderator or Admin',
  })
  role!: string;
}