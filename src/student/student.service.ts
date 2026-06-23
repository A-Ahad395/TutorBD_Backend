import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReplaceReviewDto } from './dto/replace-review.dto';

interface Tutor {
  id: number;
  name: string;
  subject: string;
  price: number;
}

interface Booking {
  id: number;
  studentId: number;
  tutorId: number;
  subject: string;
  date: string;
  timeSlot: string;
  status: string;
}

interface Session {
  id: number;
  studentId: number;
  tutorId: number;
  subject: string;
  date: string;
  timeSlot: string;
  status: string;
}

interface Review {
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
    {
      id: 2,
      studentId: 1,
      tutorId: 1,
      subject: 'Mathematics',
      date: '2026-06-22',
      timeSlot: '04:00 PM',
      status: 'completed',
    },
    {
      id: 3,
      studentId: 2,
      tutorId: 3,
      subject: 'Physics',
      date: '2026-06-23',
      timeSlot: '06:00 PM',
      status: 'completed',
    },
  ];

  private readonly reviews: Review[] = [];

  // Route 1 service:
  // Search tutors using subject and maximum price
  searchTutors(subject?: string, maxPrice?: number) {
    if (
      maxPrice !== undefined &&
      (Number.isNaN(maxPrice) || maxPrice < 0)
    ) {
      throw new BadRequestException(
        'maxPrice must be a valid positive number',
      );
    }

    const filteredTutors = this.tutors.filter((tutor) => {
      const subjectMatched =
        !subject ||
        tutor.subject
          .toLowerCase()
          .includes(subject.trim().toLowerCase());

      const priceMatched =
        maxPrice === undefined || tutor.price <= maxPrice;

      return subjectMatched && priceMatched;
    });

    return {
      message: 'Tutors retrieved successfully',
      totalTutors: filteredTutors.length,
      data: filteredTutors,
    };
  }

  // Route 2 service:
  // Find a single tutor using tutor ID
  findTutor(id: number) {
    const tutor = this.tutors.find((item) => item.id === id);

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

  // Route 3 service:
  // Create a new booking request
  createBooking(createBookingDto: CreateBookingDto) {
    const tutor = this.tutors.find(
      (item) => item.id === createBookingDto.tutorId,
    );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${createBookingDto.tutorId} was not found`,
      );
    }

    const newBooking: Booking = {
      id: this.bookings.length + 1,
      studentId: createBookingDto.studentId,
      tutorId: createBookingDto.tutorId,
      subject: createBookingDto.subject,
      date: createBookingDto.date,
      timeSlot: createBookingDto.timeSlot,
      status: 'pending',
    };

    this.bookings.push(newBooking);

    return {
      message: 'Booking request sent successfully',
      data: newBooking,
    };
  }

  // Route 4 service:
  // Update some fields of an existing booking
  updateBooking(
    id: number,
    updateBookingDto: UpdateBookingDto,
  ) {
    const booking = this.bookings.find(
      (item) => item.id === id,
    );

    if (!booking) {
      throw new NotFoundException(
        `Booking with ID ${id} was not found`,
      );
    }

    if (updateBookingDto.subject !== undefined) {
      booking.subject = updateBookingDto.subject;
    }

    if (updateBookingDto.date !== undefined) {
      booking.date = updateBookingDto.date;
    }

    if (updateBookingDto.timeSlot !== undefined) {
      booking.timeSlot = updateBookingDto.timeSlot;
    }

    if (updateBookingDto.status !== undefined) {
      booking.status = updateBookingDto.status;
    }

    return {
      message: 'Booking updated successfully',
      data: booking,
    };
  }

  // Route 5 service:
  // Cancel or delete a booking request
  cancelBooking(id: number) {
    const bookingIndex = this.bookings.findIndex(
      (item) => item.id === id,
    );

    if (bookingIndex === -1) {
      throw new NotFoundException(
        `Booking with ID ${id} was not found`,
      );
    }

    const cancelledBooking = this.bookings.splice(
      bookingIndex,
      1,
    )[0];

    return {
      message: 'Booking cancelled successfully',
      data: cancelledBooking,
    };
  }

  // Route 6 service:
  // View all session histories or filter by student ID
  getSessionHistory(studentId?: number) {
    if (
      studentId !== undefined &&
      Number.isNaN(studentId)
    ) {
      throw new BadRequestException(
        'studentId must be a valid number',
      );
    }

    const sessionHistory =
      studentId === undefined
        ? this.sessions
        : this.sessions.filter(
            (session) => session.studentId === studentId,
          );

    return {
      message: 'Session history retrieved successfully',
      totalSessions: sessionHistory.length,
      data: sessionHistory,
    };
  }

  // Route 7 service:
  // Submit a new rating and review
  createReview(createReviewDto: CreateReviewDto) {
    const tutor = this.tutors.find(
      (item) => item.id === createReviewDto.tutorId,
    );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${createReviewDto.tutorId} was not found`,
      );
    }

    if (
      createReviewDto.rating < 1 ||
      createReviewDto.rating > 5
    ) {
      throw new BadRequestException(
        'Rating must be between 1 and 5',
      );
    }

    const newReview: Review = {
      id: this.reviews.length + 1,
      studentId: createReviewDto.studentId,
      tutorId: createReviewDto.tutorId,
      rating: createReviewDto.rating,
      comment: createReviewDto.comment,
    };

    this.reviews.push(newReview);

    return {
      message: 'Review submitted successfully',
      data: newReview,
    };
  }

  // Route 8 service:
  // Completely replace an existing review
  replaceReview(
    id: number,
    replaceReviewDto: ReplaceReviewDto,
  ) {
    const reviewIndex = this.reviews.findIndex(
      (item) => item.id === id,
    );

    if (reviewIndex === -1) {
      throw new NotFoundException(
        `Review with ID ${id} was not found`,
      );
    }

    const tutor = this.tutors.find(
      (item) => item.id === replaceReviewDto.tutorId,
    );

    if (!tutor) {
      throw new NotFoundException(
        `Tutor with ID ${replaceReviewDto.tutorId} was not found`,
      );
    }

    if (
      replaceReviewDto.rating < 1 ||
      replaceReviewDto.rating > 5
    ) {
      throw new BadRequestException(
        'Rating must be between 1 and 5',
      );
    }

    const replacedReview: Review = {
      id,
      studentId: replaceReviewDto.studentId,
      tutorId: replaceReviewDto.tutorId,
      rating: replaceReviewDto.rating,
      comment: replaceReviewDto.comment,
    };

    this.reviews[reviewIndex] = replacedReview;

    return {
      message: 'Review replaced successfully',
      data: replacedReview,
    };
  }
}