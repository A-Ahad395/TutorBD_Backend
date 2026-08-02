import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateStudentStatusDto } from './dto/update-student-status.dto';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReplaceReviewDto } from './dto/replace-review.dto';

export interface Tutor {
  id: number;
  name: string;
  subject: string;
  price: number;
}

export interface Booking {
  id: number;
  studentId: number;
  tutorId: number;
  subject: string;
  date: string;
  timeSlot: string;
  status: string;
}

export interface Session {
  id: number;
  studentId: number;
  tutorId: number;
  subject: string;
  date: string;
  timeSlot: string;
  status: string;
}

export interface Review {
  id: number;
  studentId: number;
  tutorId: number;
  rating: number;
  comment: string;
}

@Injectable()
export class StudentService {
  private readonly tutors: Tutor[] = [
    {
      id: 1,
      name: 'Rahim Ahmed',
      subject: 'Mathematics',
      price: 500,
    },
    {
      id: 2,
      name: 'Nusrat Jahan',
      subject: 'English',
      price: 400,
    },
    {
      id: 3,
      name: 'Karim Hasan',
      subject: 'Physics',
      price: 600,
    },
    {
      id: 4,
      name: 'Ayesha Rahman',
      subject: 'Mathematics',
      price: 350,
    },
    {
      id: 5,
      name: 'Siam Hossain',
      subject: 'Chemistry',
      price: 450,
    },
  ];

  private readonly bookings: Booking[] = [];

  private readonly sessions: Session[] = [
    {
      id: 1,
      studentId: 1,
      tutorId: 2,
      subject: 'English',
      date: '2026-06-20',
      timeSlot: '10:00 AM',
      status: 'completed',
    },
  ];

  private readonly reviews: Review[] = [];

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    dto: CreateStudentDto,
  ): Promise<Student> {
    const existingStudent =
      await this.studentRepository.findOneBy({
        email: dto.email,
      });

    if (existingStudent) {
      throw new BadRequestException(
        'Student with this email already exists',
      );
    }

    return this.studentRepository.save(dto);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudentById(
    id: number,
  ): Promise<Student> {
    const student =
      await this.studentRepository.findOneBy({
        id: id,
      });

    if (!student) {
      throw new NotFoundException(
        `Student with ID ${id} not found`,
      );
    }

    return student;
  }

  async updateStudent(
    id: number,
    dto: UpdateStudentDto,
  ): Promise<Student> {
    const student =
      await this.studentRepository.findOneBy({
        id: id,
      });

    if (!student) {
      throw new NotFoundException(
        `Student with ID ${id} not found`,
      );
    }

    if (
      dto.email !== undefined &&
      dto.email !== student.email
    ) {
      const existingStudent =
        await this.studentRepository.findOneBy({
          email: dto.email,
        });

      if (existingStudent) {
        throw new BadRequestException(
          'Student with this email already exists',
        );
      }
    }

    await this.studentRepository.update(
      id,
      dto,
    );

    const updatedStudent =
      await this.studentRepository.findOneBy({
        id: id,
      });

    return updatedStudent!;
  }

  async updateStudentStatus(
    id: number,
    dto: UpdateStudentStatusDto,
  ): Promise<Student> {
    const student =
      await this.studentRepository.findOneBy({
        id: id,
      });

    if (!student) {
      throw new NotFoundException(
        `Student with ID ${id} not found`,
      );
    }

    await this.studentRepository.update(
      id,
      dto,
    );

    const updatedStudent =
      await this.studentRepository.findOneBy({
        id: id,
      });

    return updatedStudent!;
  }

  searchTutors(
    subject?: string,
    maxPrice?: number,
  ) {
    if (
      maxPrice !== undefined &&
      (Number.isNaN(maxPrice) || maxPrice < 0)
    ) {
      throw new BadRequestException(
        'maxPrice must be a valid positive number',
      );
    }

    const filteredTutors =
      this.tutors.filter((tutor) => {
        const subjectMatched =
          !subject ||
          tutor.subject
            .toLowerCase()
            .includes(subject.trim().toLowerCase());

        const priceMatched =
          maxPrice === undefined ||
          tutor.price <= maxPrice;

        return subjectMatched && priceMatched;
      });

    return {
      message: 'Tutors retrieved successfully',
      totalTutors: filteredTutors.length,
      data: filteredTutors,
    };
  }

  findTutor(
    id: number,
  ) {
    const tutor =
      this.tutors.find(
        (item) => item.id === id,
      );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${id} was not found`,
      );
    }

    return {
      message: 'Tutor retrieved successfully',
      data: tutor,
    };
  }

  createBooking(
    dto: CreateBookingDto,
  ) {
    const tutor =
      this.tutors.find(
        (item) => item.id === dto.tutorId,
      );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${dto.tutorId} was not found`,
      );
    }

    const newBooking: Booking = {
      id: this.bookings.length + 1,
      studentId: dto.studentId,
      tutorId: dto.tutorId,
      subject: dto.subject,
      date: dto.date,
      timeSlot: dto.timeSlot,
      status: 'pending',
    };

    this.bookings.push(newBooking);

    return {
      message: 'Booking request sent successfully',
      data: newBooking,
    };
  }

  updateBooking(
    id: number,
    dto: UpdateBookingDto,
  ) {
    const booking =
      this.bookings.find(
        (item) => item.id === id,
      );

    if (!booking) {
      throw new NotFoundException(
        `Booking with ID ${id} was not found`,
      );
    }

    if (dto.subject !== undefined) {
      booking.subject = dto.subject;
    }

    if (dto.date !== undefined) {
      booking.date = dto.date;
    }

    if (dto.timeSlot !== undefined) {
      booking.timeSlot = dto.timeSlot;
    }

    if (dto.status !== undefined) {
      booking.status = dto.status;
    }

    return {
      message: 'Booking updated successfully',
      data: booking,
    };
  }

  cancelBooking(
    id: number,
  ) {
    const index =
      this.bookings.findIndex(
        (item) => item.id === id,
      );

    if (index === -1) {
      throw new NotFoundException(
        `Booking with ID ${id} was not found`,
      );
    }

    const cancelledBooking =
      this.bookings.splice(
        index,
        1,
      )[0];

    return {
      message: 'Booking cancelled successfully',
      data: cancelledBooking,
    };
  }

  getSessionHistory(
    studentId?: number,
  ) {
    if (
      studentId !== undefined &&
      Number.isNaN(studentId)
    ) {
      throw new BadRequestException(
        'studentId must be a valid number',
      );
    }

    const history =
      studentId === undefined
        ? this.sessions
        : this.sessions.filter(
            (session) =>
              session.studentId === studentId,
          );

    return {
      message: 'Session history retrieved successfully',
      totalSessions: history.length,
      data: history,
    };
  }

  createReview(
    dto: CreateReviewDto,
  ) {
    const tutor =
      this.tutors.find(
        (item) => item.id === dto.tutorId,
      );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${dto.tutorId} was not found`,
      );
    }

    if (
      dto.rating < 1 ||
      dto.rating > 5
    ) {
      throw new BadRequestException(
        'Rating must be between 1 and 5',
      );
    }

    const review: Review = {
      id: this.reviews.length + 1,
      studentId: dto.studentId,
      tutorId: dto.tutorId,
      rating: dto.rating,
      comment: dto.comment,
    };

    this.reviews.push(review);

    return {
      message: 'Review submitted successfully',
      data: review,
    };
  }

  replaceReview(
    id: number,
    dto: ReplaceReviewDto,
  ) {
    const index =
      this.reviews.findIndex(
        (item) => item.id === id,
      );

    if (index === -1) {
      throw new NotFoundException(
        `Review with ID ${id} was not found`,
      );
    }

    if (
      dto.rating < 1 ||
      dto.rating > 5
    ) {
      throw new BadRequestException(
        'Rating must be between 1 and 5',
      );
    }

    const tutor =
      this.tutors.find(
        (item) => item.id === dto.tutorId,
      );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${dto.tutorId} was not found`,
      );
    }

    const review: Review = {
      id: id,
      studentId: dto.studentId,
      tutorId: dto.tutorId,
      rating: dto.rating,
      comment: dto.comment,
    };

    this.reviews[index] = review;

    return {
      message: 'Review updated successfully',
      data: review,
    };
  }

  async deleteStudent(
    id: number,
  ) {
    const student =
      await this.studentRepository.findOneBy({
        id: id,
      });

    if (!student) {
      throw new NotFoundException(
        `Student with ID ${id} not found`,
      );
    }

    await this.studentRepository.delete(id);

    return {
      message: 'Student deleted successfully',
      deletedStudentId: id,
    };
  }
}