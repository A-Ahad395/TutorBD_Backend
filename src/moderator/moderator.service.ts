import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ModeratorUserDto } from './dto/moderator-user.dto';

 
@Injectable()
export class ModeratorService {
  private reports = [
    {
      id: 1,
      title: 'Fake Tutor',
      description: 'Using fake certificate',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Late Class Issue',
      status: 'Approved',
    },
    {
      id: 3,
      title: 'Payment Issue',
      status: 'Student reported payment problem',
    },

  ];

  private users: ModeratorUserDto[] = [];

  register(user: ModeratorUserDto) {
    this.users.push(user);
    return {
      message: 'Moderator registered successfully',
      data: user,
    };
  }
 
  create(createReportDto: CreateReportDto) {
    const report = {
      id: this.reports.length + 1,
      ...createReportDto,
      status: 'Pending',
    };
 
    this.reports.push(report);
 
    return {
      message: 'Report created successfully',
      data: report,
    };
  }
 
  findAll(status?: string) {
    if (status) {
      return this.reports.filter(
        (report) =>
          report.status.toLowerCase() === status.toLowerCase(),
      );
    }
 
    return this.reports;
  }
 
  findOne(id: number) {
    return (
      this.reports.find((report) => report.id === id) ||
      `Report with ID ${id} not found`
    );
  }
 
  update(id: number, updateReportDto: UpdateReportDto) {
    const report = this.reports.find(
      (report) => report.id === id,
    );
 
    if (!report) {
      return `Report with ID ${id} not found`;
    }
 
    Object.assign(report, updateReportDto);
 
    return {
      message: 'Report updated successfully',
      data: report,
    };
  }
 
  replace(id: number, createReportDto: CreateReportDto) {
    const index = this.reports.findIndex(
      (report) => report.id === id,
    );
 
    if (index === -1) {
      return `Report with ID ${id} not found`;
    }
 
    this.reports[index] = {
      id,
      ...createReportDto,
      status: 'Pending',
    };
 
    return {
      message: 'Report replaced successfully',
      data: this.reports[index],
    };
  }
 
  remove(id: number) {
    const index = this.reports.findIndex(
      (report) => report.id === id,
    );
 
    if (index === -1) {
      return `Report with ID ${id} not found`;
    }
 
    const deleted = this.reports.splice(index, 1);
 
    return {
      message: 'Report deleted successfully',
      data: deleted[0],
    };
  }
 
  approve(id: number) {
    const report = this.reports.find(
      (report) => report.id === id,
    );
 
    if (!report) {
      return `Report with ID ${id} not found`;
    }
 
    report.status = 'Approved';
 
    return {
      message: 'Report approved',
      data: report,
    };
  }
 
  reject(id: number, reason: string) {
    const report = this.reports.find(
      (report) => report.id === id,
    );
 
    if (!report) {
      return `Report with ID ${id} not found`;
    }
 
    report.status = 'Rejected';
 
    return {
      message: 'Report rejected',
      reason,
      data: report,
    };
  }
 
  resolve(id: number) {
    const report = this.reports.find(
      (report) => report.id === id,
    );
 
    if (!report) {
      return `Report with ID ${id} not found`;
    }
 
    report.status = 'Resolved';
 
    return {
      message: 'Complaint resolved',
      data: report,
    };
  }

  
  findAllUsers() {
    return this.users;
  }

}