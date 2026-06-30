import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Route 1: View total platform analytics
  @Get('analytics')
  getAnalytics() {
    return this.adminService.getAnalytics();
  }

  // Route 2: View all subjects or search subjects
  @Get('subjects')
  getSubjects(@Query('search') search?: string) {
    return this.adminService.getSubjects(search);
  }

  // Route 3: Add a new global subject
  @Post('subjects')
  createSubject(@Body() createSubjectDto: CreateSubjectDto) {
    return this.adminService.createSubject(createSubjectDto);
  }

  // Route 4: Update a global subject
  @Put('subjects/:id')
  updateSubject(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ) {
    return this.adminService.updateSubject(id, updateSubjectDto);
  }

  // Route 5: Delete a global subject
  @Delete('subjects/:id')
  deleteSubject(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteSubject(id);
  }

  // Route 6: View all users or filter by role
  @Get('users')
  getUsers(@Query('role') role?: string) {
    return this.adminService.getUsers(role);
  }

  // Route 7: Promote or demote user role
  @Patch('users/:id/role')
  updateUserRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserRoleDto: UpdateUserRoleDto,
  ) {
    return this.adminService.updateUserRole(id, updateUserRoleDto);
  }

  // Route 8: Delete a user
  @Delete('users/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteUser(id);
  }
}