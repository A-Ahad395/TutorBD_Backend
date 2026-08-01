import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

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
import { Admin } from './admin.entity';
import { Subject } from './subject.entity';
import { Category } from './category.entity';

@Injectable()
export class AdminService {
  private users = [
    {
      id: 1,
      name: 'Rahad',
      email: 'rahada70@gmail.com',
      role: 'Student',
    },
    {
      id: 2,
      name: 'Kamrul',
      email: 'kamrul@gmail.com',
      role: 'Tutor',
    },
    {
      id: 3,
      name: 'Qaiyum',
      email: 'qaiyum@gmail.com',
      role: 'Moderator',
    },
  ];

  private adminProfileList: any[] = [];

  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,

    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAnalytics() {
    const totalSubjects =
      await this.subjectRepository.count();

    const totalCategories =
      await this.categoryRepository.count();

    const totalAdmins =
      await this.adminRepository.count();

    return {
      message: 'Platform analytics retrieved successfully',
      totalUsers: this.users.length,
      totalSubjects: totalSubjects,
      totalCategories: totalCategories,

      totalStudents: this.users.filter(
        (user) => user.role === 'Student',
      ).length,

      totalTutors: this.users.filter(
        (user) => user.role === 'Tutor',
      ).length,

      totalModerators: this.users.filter(
        (user) => user.role === 'Moderator',
      ).length,

      totalAdmins: totalAdmins,
    };
  }

  async getSubjects(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  async getSubjectById(
    id: number,
  ): Promise<Subject> {
    const subject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    if (!subject) {
      throw new NotFoundException(
        `Subject with ID ${id} not found`,
      );
    }

    return subject;
  }

  async searchSubjectByName(
    name: string,
  ): Promise<Subject[]> {
    return this.subjectRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }

  async createSubject(
    dto: CreateSubjectDto,
  ): Promise<Subject> {
    return this.subjectRepository.save(dto);
  }

  async updateSubject(
    id: number,
    dto: UpdateSubjectDto,
  ): Promise<Subject> {
    const subject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    if (!subject) {
      throw new NotFoundException(
        `Subject with ID ${id} not found`,
      );
    }

    await this.subjectRepository.update(
      id,
      dto,
    );

    const updatedSubject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    return updatedSubject!;
  }

  async updateSubjectName(
    id: number,
    dto: UpdateSubjectNameDto,
  ): Promise<Subject> {
    const subject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    if (!subject) {
      throw new NotFoundException(
        `Subject with ID ${id} not found`,
      );
    }

    await this.subjectRepository.update(
      id,
      dto,
    );

    const updatedSubject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    return updatedSubject!;
  }

  async updateSubjectStatus(
    id: number,
    dto: UpdateSubjectStatusDto,
  ): Promise<Subject> {
    const subject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    if (!subject) {
      throw new NotFoundException(
        `Subject with ID ${id} not found`,
      );
    }

    await this.subjectRepository.update(
      id,
      dto,
    );

    const updatedSubject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    return updatedSubject!;
  }

  async deleteSubject(
    id: number,
  ): Promise<void> {
    const subject =
      await this.subjectRepository.findOneBy({
        id: id,
      });

    if (!subject) {
      throw new NotFoundException(
        `Subject with ID ${id} not found`,
      );
    }

    await this.subjectRepository.delete(id);
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async getCategoryById(
    id: number,
  ): Promise<Category> {
    const category =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${id} not found`,
      );
    }

    return category;
  }

  async searchCategoryByName(
    name: string,
  ): Promise<Category[]> {
    return this.categoryRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }

  async createCategory(
    dto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryRepository.save(dto);
  }

  async updateCategory(
    id: number,
    dto: UpdateCategoryDto,
  ): Promise<Category> {
    const category =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${id} not found`,
      );
    }

    await this.categoryRepository.update(
      id,
      dto,
    );

    const updatedCategory =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    return updatedCategory!;
  }

  async updateCategoryName(
    id: number,
    dto: UpdateCategoryNameDto,
  ): Promise<Category> {
    const category =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${id} not found`,
      );
    }

    await this.categoryRepository.update(
      id,
      dto,
    );

    const updatedCategory =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    return updatedCategory!;
  }

  async updateCategoryStatus(
    id: number,
    dto: UpdateCategoryStatusDto,
  ): Promise<Category> {
    const category =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${id} not found`,
      );
    }

    await this.categoryRepository.update(
      id,
      dto,
    );

    const updatedCategory =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    return updatedCategory!;
  }

  async deleteCategory(
    id: number,
  ): Promise<void> {
    const category =
      await this.categoryRepository.findOneBy({
        id: id,
      });

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${id} not found`,
      );
    }

    await this.categoryRepository.delete(id);
  }

  getUsers(role?: string) {
    if (!role) {
      return this.users;
    }

    return this.users.filter(
      (user) =>
        user.role.toLowerCase() === role.toLowerCase(),
    );
  }

  updateUserRole(
    id: number,
    dto: UpdateUserRoleDto,
  ) {
    const user = this.users.find(
      (user) => user.id === id,
    );

    if (!user) {
      throw new NotFoundException(
        `User with ID ${id} not found`,
      );
    }

    const previousRole = user.role;

    user.role = dto.role;

    return {
      message: 'User role updated successfully',
      previousRole: previousRole,
      user: user,
    };
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(
      (user) => user.id === id,
    );

    if (index === -1) {
      throw new NotFoundException(
        `User with ID ${id} not found`,
      );
    }

    const deletedUser =
      this.users.splice(index, 1)[0];

    return {
      message: 'User deleted successfully',
      user: deletedUser,
    };
  }

  createAdminProfile(
    dto: AdminProfileDto,
  ) {
    const newProfile = {
      id: this.adminProfileList.length + 1,
      name: dto.name,
      date: dto.date,
      socialLink: dto.socialLink,
    };

    this.adminProfileList.push(newProfile);

    return {
      message: 'Admin profile created successfully',
      data: newProfile,
    };
  }

  getAdminProfiles() {
    return {
      message: 'All admin profiles fetched successfully',
      data: this.adminProfileList,
    };
  }

  async createAdmin(
    dto: CreateAdminDto,
  ): Promise<Admin> {
    const admin =
      this.adminRepository.create(dto);

    return this.adminRepository.save(admin);
  }

  async searchAdminByFullName(
    fullName: string,
  ): Promise<Admin[]> {
    return this.adminRepository.find({
      where: {
        fullName: Like(`%${fullName}%`),
      },
    });
  }

  async getAdminByUsername(
    username: string,
  ) {
    const admin =
      await this.adminRepository.findOne({
        select: {
          id: true,
          fullName: true,
          isActive: true,
        },
        where: {
          username: username,
        },
      });

    if (!admin) {
      throw new NotFoundException(
        `Admin with username ${username} not found`,
      );
    }

    return admin;
  }

  async updateAdminStatus(
    username: string,
    dto: UpdateAdminStatusDto,
  ): Promise<Admin> {
    const admin =
      await this.adminRepository.findOneBy({
        username: username,
      });

    if (!admin) {
      throw new NotFoundException(
        `Admin with username ${username} not found`,
      );
    }

    await this.adminRepository.update(
      {
        username: username,
      },
      dto,
    );

    const updatedAdmin =
      await this.adminRepository.findOneBy({
        username: username,
      });

    return updatedAdmin!;
  }

  async deleteAdminByUsername(
    username: string,
  ): Promise<void> {
    const admin =
      await this.adminRepository.findOneBy({
        username: username,
      });

    if (!admin) {
      throw new NotFoundException(
        `Admin with username ${username} not found`,
      );
    }

    await this.adminRepository.delete({
      username: username,
    });
  }

  async getAllAdmins(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  async getDashboard() {
    const totalSubjects =
      await this.subjectRepository.count();

    const totalCategories =
      await this.categoryRepository.count();

    const totalAdmins =
      await this.adminRepository.count();

    return {
      message:
        'Admin dashboard data retrieved successfully',

      totalUsers: this.users.length,

      totalStudents: this.users.filter(
        (user) => user.role === 'Student',
      ).length,

      totalTutors: this.users.filter(
        (user) => user.role === 'Tutor',
      ).length,

      totalModerators: this.users.filter(
        (user) => user.role === 'Moderator',
      ).length,

      totalAdmins: totalAdmins,
      totalSubjects: totalSubjects,
      totalCategories: totalCategories,
      totalTuitions: 0,
      totalRevenue: 0,
    };
  }
}
