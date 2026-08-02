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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BookingService } from './booking.service';

import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';


@Controller('booking')
export class BookingController {

  constructor(
    private readonly bookingService: BookingService,
  ) {}


  @Post()
  @UsePipes(new ValidationPipe())
  createBooking(
    @Body() dto: CreateBookingDto,
  ) {
    return this.bookingService.createBooking(dto);
  }


  @Get()
  getAllBookings() {
    return this.bookingService.getAllBookings();
  }


  @Get(':id')
  getBookingById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookingService.getBookingById(id);
  }


  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateBooking(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBookingDto,
  ) {
    return this.bookingService.updateBooking(
      id,
      dto,
    );
  }


  @Patch(':id/status')
  @UsePipes(new ValidationPipe())
  updateBookingStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: string },
  ) {
    return this.bookingService.updateBookingStatus(
      id,
      body.status,
    );
  }


  @Delete(':id')
  deleteBooking(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookingService.deleteBooking(id);
  }

}