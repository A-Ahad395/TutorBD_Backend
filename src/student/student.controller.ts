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

import { StudentService } from './student.service';
<<<<<<< Updated upstream
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReplaceReviewDto } from './dto/replace-review.dto';
=======
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateStudentStatusDto } from './dto/update-student-status.dto';
>>>>>>> Stashed changes

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Route 1: Search tutors by subject and maximum price
  @Get('tutors/search')
  searchTutors(
    @Query('subject') subject?: string,
    @Query('maxPrice') maxPrice?: string,
  ): ReturnType<StudentService['searchTutors']> {
    const numericMaxPrice =
      maxPrice !== undefined ? Number(maxPrice) : undefined;

    return this.studentService.searchTutors(
      subject,
      numericMaxPrice,
    );
  }

<<<<<<< Updated upstream
  // Route 2: Get one tutor by ID
  @Get('tutors/:id')
  findTutor(
=======
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
>>>>>>> Stashed changes
    @Param('id', ParseIntPipe) id: number,
  ): ReturnType<StudentService['findTutor']> {
    return this.studentService.findTutor(id);
  }

  // Route 3: Send a booking request
  @Post('bookings')
  createBooking(
    @Body() createBookingDto: CreateBookingDto,
  ): ReturnType<StudentService['createBooking']> {
    return this.studentService.createBooking(createBookingDto);
  }

  // Route 4: Partially update a booking request
  @Patch('bookings/:id')
  updateBooking(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookingDto: UpdateBookingDto,
  ): ReturnType<StudentService['updateBooking']> {
    return this.studentService.updateBooking(
      id,
      updateBookingDto,
    );
  }

  // Route 5: Cancel a booking request
  @Delete('bookings/:id')
  cancelBooking(
    @Param('id', ParseIntPipe) id: number,
  ): ReturnType<StudentService['cancelBooking']> {
    return this.studentService.cancelBooking(id);
  }

  // Route 6: View student session history
  @Get('sessions/history')
  getSessionHistory(
    @Query('studentId') studentId?: string,
  ): ReturnType<StudentService['getSessionHistory']> {
    const numericStudentId =
      studentId !== undefined ? Number(studentId) : undefined;

    return this.studentService.getSessionHistory(
      numericStudentId,
    );
  }

  // Route 7: Submit rating and review
  @Post('reviews')
  createReview(
    @Body() createReviewDto: CreateReviewDto,
  ): ReturnType<StudentService['createReview']> {
    return this.studentService.createReview(createReviewDto);
  }

  // Route 8: Fully replace an existing review
  @Put('reviews/:id')
  replaceReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() replaceReviewDto: ReplaceReviewDto,
  ): ReturnType<StudentService['replaceReview']> {
    return this.studentService.replaceReview(
      id,
      replaceReviewDto,
    );
  }
}