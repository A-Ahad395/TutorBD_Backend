import { IsEnum } from 'class-validator';

export enum ReportStatus {
  PENDING = 'Pending',
  RESOLVED = 'Resolved',
  REJECTED = 'Rejected',
}

export class UpdateReportStatusDto {

  @IsEnum(ReportStatus)
  status!:  ReportStatus;

}