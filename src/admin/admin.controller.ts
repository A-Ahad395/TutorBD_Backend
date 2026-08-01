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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AdminService } from './admin.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UpdateSubjectNameDto } from './dto/update-subject-name.dto';
import { UpdateSubjectStatusDto } from './dto/update-subject-status.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateCategoryNameDto } from './dto/update-category-name.dto';
import { UpdateCategoryStatusDto } from './dto/update-category-status.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { AdminProfileDto } from './dto/admin-profile.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminStatusDto } from './dto/update-admin-status.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
  ) {}

  @Get('dashboard')
  getDashboard() {
    return this.adminService.getDashboard();
  }

  @Get('analytics')
  getAnalytics() {
    return this.adminService.getAnalytics();
  }

  @Post('subjects')
  @UsePipes(new ValidationPipe())
  createSubject(
    @Body() dto: CreateSubjectDto,
  ) {
    return this.adminService.createSubject(dto);
  }

  @Get('subjects')
  getSubjects() {
    return this.adminService.getSubjects();
  }

  @Get('subjects/search')
  searchSubjectByName(
    @Query('name') name: string,
  ) {
    return this.adminService.searchSubjectByName(
      name,
    );
  }

  @Get('subjects/:id')
  getSubjectById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.adminService.getSubjectById(id);
  }

  @Put('subjects/:id')
  @UsePipes(new ValidationPipe())
  updateSubject(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSubjectDto,
  ) {
    return this.adminService.updateSubject(
      id,
      dto,
    );
  }

  @Patch('subjects/:id/name')
  @UsePipes(new ValidationPipe())
  updateSubjectName(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSubjectNameDto,
  ) {
    return this.adminService.updateSubjectName(
      id,
      dto,
    );
  }

  @Patch('subjects/:id/status')
  @UsePipes(new ValidationPipe())
  updateSubjectStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSubjectStatusDto,
  ) {
    return this.adminService.updateSubjectStatus(
      id,
      dto,
    );
  }

  @Delete('subjects/:id')
  deleteSubject(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.adminService.deleteSubject(id);
  }

  @Post('categories')
  @UsePipes(new ValidationPipe())
  createCategory(
    @Body() dto: CreateCategoryDto,
  ) {
    return this.adminService.createCategory(dto);
  }

  @Get('categories')
  getCategories() {
    return this.adminService.getCategories();
  }

  @Get('categories/search')
  searchCategoryByName(
    @Query('name') name: string,
  ) {
    return this.adminService.searchCategoryByName(
      name,
    );
  }

  @Get('categories/:id')
  getCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.adminService.getCategoryById(id);
  }

  @Put('categories/:id')
  @UsePipes(new ValidationPipe())
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.adminService.updateCategory(
      id,
      dto,
    );
  }

  @Patch('categories/:id/name')
  @UsePipes(new ValidationPipe())
  updateCategoryName(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoryNameDto,
  ) {
    return this.adminService.updateCategoryName(
      id,
      dto,
    );
  }

  @Patch('categories/:id/status')
  @UsePipes(new ValidationPipe())
  updateCategoryStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoryStatusDto,
  ) {
    return this.adminService.updateCategoryStatus(
      id,
      dto,
    );
  }

  @Delete('categories/:id')
  deleteCategory(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.adminService.deleteCategory(id);
  }

  @Get('users')
  getUsers(
    @Query('role') role?: string,
  ) {
    return this.adminService.getUsers(role);
  }

  @Patch('users/:id/role')
  @UsePipes(new ValidationPipe())
  updateUserRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserRoleDto,
  ) {
    return this.adminService.updateUserRole(
      id,
      dto,
    );
  }

  @Delete('users/:id')
  deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.adminService.deleteUser(id);
  }

  @Post('profile')
  @UsePipes(new ValidationPipe())
  createAdminProfile(
    @Body() dto: AdminProfileDto,
  ) {
    return this.adminService.createAdminProfile(
      dto,
    );
  }

  @Get('profile')
  getAdminProfiles() {
    return this.adminService.getAdminProfiles();
  }

  @Post('admins')
  @UsePipes(new ValidationPipe())
  createAdmin(
    @Body() dto: CreateAdminDto,
  ) {
    return this.adminService.createAdmin(dto);
  }

  @Get('admins')
  getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @Get('admins/search')
  searchAdminByFullName(
    @Query('fullName') fullName: string,
  ) {
    return this.adminService.searchAdminByFullName(
      fullName,
    );
  }

  @Patch('admins/:username/status')
  @UsePipes(new ValidationPipe())
  updateAdminStatus(
    @Param('username') username: string,
    @Body() dto: UpdateAdminStatusDto,
  ) {
    return this.adminService.updateAdminStatus(
      username,
      dto,
    );
  }

  @Get('admins/:username')
  getAdminByUsername(
    @Param('username') username: string,
  ) {
    return this.adminService.getAdminByUsername(
      username,
    );
  }

  @Delete('admins/:username')
  deleteAdminByUsername(
    @Param('username') username: string,
  ) {
    return this.adminService.deleteAdminByUsername(
      username,
    );
  }
}
