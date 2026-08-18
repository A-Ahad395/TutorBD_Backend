import { IsEnum } from 'class-validator';

export enum TuitionStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  HIDDEN = 'Hidden',
}

export class UpdateTuitionVerificationDto {

  @IsEnum(TuitionStatus)
  status!:  TuitionStatus;

}