import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Injectable()
export class AdminService {
  private subjects = [
    {
      id: 1,
      name: 'Web Technology',
      description: 'Advanced web application development',
    },
    {
      id: 2,
      name: 'Database',
      description: 'Database design and management',
    },
  ];

  private users = [
    {
      id: 1,
      name: 'Rahim',
      email: 'rahim@gmail.com',
      role: 'Student',
    },
    {
      id: 2,
      name: 'Karim',
      email: 'karim@gmail.com',
      role: 'Tutor',
    },
    {
      id: 3,
      name: 'Nadia',
      email: 'nadia@gmail.com',
      role: 'Manager',
    },
  ];

  // Route 1: View total platform analytics
  getAnalytics() {
    return {
      message: 'Platform analytics retrieved successfully',
      totalUsers: this.users.length,
      totalSubjects: this.subjects.length,
      totalStudents: this.users.filter(
        (user) => user.role.toLowerCase() === 'student',
      ).length,
      totalTutors: this.users.filter(
        (user) => user.role.toLowerCase() === 'tutor',
      ).length,
      totalManagers: this.users.filter(
        (user) => user.role.toLowerCase() === 'manager',
      ).length,
    };
  }

  // Route 2: Get all subjects with optional search query
  getSubjects(search?: string) {
    if (search) {
      const searchText = search.toLowerCase();

      return this.subjects.filter(
        (subject) =>
          subject.name.toLowerCase().includes(searchText) ||
          subject.description.toLowerCase().includes(searchText),
      );
    }

    return this.subjects;
  }

  // Route 3: Add a new global subject
  createSubject(createSubjectDto: CreateSubjectDto) {
    const newSubject = {
      id:
        this.subjects.length > 0
          ? Math.max(...this.subjects.map((subject) => subject.id)) + 1
          : 1,
      ...createSubjectDto,
    };

    this.subjects.push(newSubject);

    return {
      message: 'Subject added successfully',
      subject: newSubject,
    };
  }

  // Route 4: Update a global subject
  updateSubject(id: number, updateSubjectDto: UpdateSubjectDto) {
    const subjectIndex = this.subjects.findIndex(
      (subject) => subject.id === id,
    );

    if (subjectIndex === -1) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }

    this.subjects[subjectIndex] = {
      id,
      ...updateSubjectDto,
    };

    return {
      message: 'Subject updated successfully',
      subject: this.subjects[subjectIndex],
    };
  }

  // Route 5: Delete a global subject
  deleteSubject(id: number) {
    const subjectIndex = this.subjects.findIndex(
      (subject) => subject.id === id,
    );

    if (subjectIndex === -1) {
      throw new NotFoundException(`Subject with ID ${id} not found`);
    }

    const deletedSubject = this.subjects.splice(subjectIndex, 1)[0];

    return {
      message: 'Subject deleted successfully',
      subject: deletedSubject,
    };
  }

  // Route 6: Get all users with optional role filter
  getUsers(role?: string) {
    if (role) {
      return this.users.filter(
        (user) => user.role.toLowerCase() === role.toLowerCase(),
      );
    }

    return this.users;
  }

  // Route 7: Promote or demote a user
  updateUserRole(id: number, updateUserRoleDto: UpdateUserRoleDto) {
    const user = this.users.find((currentUser) => currentUser.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const previousRole = user.role;
    user.role = updateUserRoleDto.role;

    return {
      message: 'User role updated successfully',
      previousRole,
      user,
    };
  }

  // Route 8: Delete a user
  deleteUser(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const deletedUser = this.users.splice(userIndex, 1)[0];

    return {
      message: 'User deleted successfully',
      user: deletedUser,
    };
  }
}