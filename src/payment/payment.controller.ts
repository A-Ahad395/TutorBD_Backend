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

import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createPayment(
    @Body() dto: CreatePaymentDto,
  ) {
    return this.paymentService.createPayment(dto);
  }

  @Get()
  getAllPayments() {
    return this.paymentService.getAllPayments();
  }

  @Get('search')
  searchPayment(
    @Query('transactionId') transactionId: string,
  ) {
    return this.paymentService.searchPayment(
      transactionId,
    );
  }

  @Get(':id')
  getPaymentById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.paymentService.getPaymentById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updatePayment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePaymentDto,
  ) {
    return this.paymentService.updatePayment(
      id,
      dto,
    );
  }

  @Patch(':id/status')
  @UsePipes(new ValidationPipe())
  updatePaymentStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePaymentStatusDto,
  ) {
    return this.paymentService.updatePaymentStatus(
      id,
      dto,
    );
  }

  @Delete(':id')
  deletePayment(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.paymentService.deletePayment(id);
  }
}