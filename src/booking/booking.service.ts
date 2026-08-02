import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';


@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}


  async createBooking(
    dto: CreateBookingDto,
  ): Promise<Booking> {

    return this.bookingRepository.save(dto);
  }


  async getAllBookings(): Promise<Booking[]> {

    return this.bookingRepository.find();
  }


  async getBookingById(
    id: number,
  ): Promise<Booking> {

    const booking =
      await this.bookingRepository.findOneBy({
        id: id,
      });

    if (!booking) {
      throw new NotFoundException(
        `Booking with ID ${id} not found`,
      );
    }

    return booking;
  }


  async updateBooking(
    id: number,
    dto: UpdateBookingDto,
  ): Promise<Booking> {

    await this.getBookingById(id);

    await this.bookingRepository.update(
      id,
      dto,
    );

    return this.getBookingById(id);
  }


  async updateBookingStatus(
    id: number,
    status: string,
  ): Promise<Booking> {

    await this.getBookingById(id);

    await this.bookingRepository.update(
      id,
      {
        status: status,
      },
    );

    return this.getBookingById(id);
  }


  async deleteBooking(
    id: number,
  ): Promise<void> {

    const booking =
      await this.getBookingById(id);

    await this.bookingRepository.delete(
      booking.id,
    );
  }

}