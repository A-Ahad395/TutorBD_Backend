import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { Payment } from './payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async createPayment(
    dto: CreatePaymentDto,
  ): Promise<Payment> {
    return this.paymentRepository.save(dto);
  }

  async getAllPayments(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }

  async getPaymentById(
    id: number,
  ): Promise<Payment> {
    const payment =
      await this.paymentRepository.findOneBy({
        id: id,
      });

    if (!payment) {
      throw new NotFoundException(
        `Payment with ID ${id} not found`,
      );
    }

    return payment;
  }

  async searchPayment(
    transactionId: string,
  ): Promise<Payment[]> {
    return this.paymentRepository.find({
      where: {
        transactionId: Like(`%${transactionId}%`),
      },
    });
  }

  async updatePayment(
    id: number,
    dto: UpdatePaymentDto,
  ): Promise<Payment> {
    const payment =
      await this.paymentRepository.findOneBy({
        id: id,
      });

    if (!payment) {
      throw new NotFoundException(
        `Payment with ID ${id} not found`,
      );
    }

    await this.paymentRepository.update(
      id,
      dto,
    );

    const updatedPayment =
      await this.paymentRepository.findOneBy({
        id: id,
      });

    return updatedPayment!;
  }

  async updatePaymentStatus(
    id: number,
    dto: UpdatePaymentStatusDto,
  ): Promise<Payment> {
    const payment =
      await this.paymentRepository.findOneBy({
        id: id,
      });

    if (!payment) {
      throw new NotFoundException(
        `Payment with ID ${id} not found`,
      );
    }

    await this.paymentRepository.update(
      id,
      dto,
    );

    const updatedPayment =
      await this.paymentRepository.findOneBy({
        id: id,
      });

    return updatedPayment!;
  }

  async deletePayment(
    id: number,
  ): Promise<void> {
    const payment =
      await this.paymentRepository.findOneBy({
        id: id,
      });

    if (!payment) {
      throw new NotFoundException(
        `Payment with ID ${id} not found`,
      );
    }

    await this.paymentRepository.delete(id);
  }
}