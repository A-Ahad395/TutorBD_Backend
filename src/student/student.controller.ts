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

import { StudentService } from './student.service';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateStudentStatusDto } from './dto/update-student-status.dto';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReplaceReviewDto } from './dto/replace-review.dto';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
  ) {}

  @Get('tutors/search')
  searchTutors(
    @Query('subject') subject?: string,
    @Query('maxPrice') maxPrice?: string,
  ) {
    const numericMaxPrice =
      maxPrice !== undefined
        ? Number(maxPrice)
        : undefined;

    return this.studentService.searchTutors(
      subject,
      numericMaxPrice,
    );
  }

  @Get('tutors/:id')
  findTutor(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.studentService.findTutor(id);
  }

  @Post('bookings')
  @UsePipes(new ValidationPipe())
  createBooking(
    @Body() dto: CreateBookingDto,
  ) {
    return this.studentService.createBooking(dto);
  }

  @Patch('bookings/:id')
  @UsePipes(new ValidationPipe())
  updateBooking(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBookingDto,
  ) {
    return this.studentService.updateBooking(
      id,
      dto,
    );
  }

  @Delete('bookings/:id')
  cancelBooking(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.studentService.cancelBooking(id);
  }

  @Get('sessions/history')
  getSessionHistory(
    @Query('studentId') studentId?: string,
  ) {
    const numericStudentId =
      studentId !== undefined
        ? Number(studentId)
        : undefined;

    return this.studentService.getSessionHistory(
      numericStudentId,
    );
  }

  @Post('reviews')
  @UsePipes(new ValidationPipe())
  createReview(
    @Body() dto: CreateReviewDto,
  ) {
    return this.studentService.createReview(dto);
  }

  @Put('reviews/:id')
  @UsePipes(new ValidationPipe())
  replaceReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ReplaceReviewDto,
  ) {
    return this.studentService.replaceReview(
      id,
      dto,
    );
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createStudent(
    @Body() dto: CreateStudentDto,
  ) {
    return this.studentService.createStudent(dto);
  }

  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.studentService.getStudentById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateStudent(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(
      id,
      dto,
    );
  }

  @Patch(':id/status')
  @UsePipes(new ValidationPipe())
  updateStudentStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStudentStatusDto,
  ) {
    return this.studentService.updateStudentStatus(
      id,
      dto,
    );
  }

  @Delete(':id')
  deleteStudent(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.studentService.deleteStudent(id);
  }
}