import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';


@Injectable()
export class ReviewService {

  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}


  async createReview(
    dto: CreateReviewDto,
  ): Promise<Review> {

    return this.reviewRepository.save(dto);
  }


  async getAllReviews(): Promise<Review[]> {

    return this.reviewRepository.find();
  }


  async getReviewById(
    id: number,
  ): Promise<Review> {

    const review =
      await this.reviewRepository.findOneBy({
        id: id,
      });

    if (!review) {
      throw new NotFoundException(
        `Review with ID ${id} not found`,
      );
    }

    return review;
  }


  async updateReview(
    id: number,
    dto: UpdateReviewDto,
  ): Promise<Review> {

    await this.getReviewById(id);

    await this.reviewRepository.update(
      id,
      dto,
    );

    return this.getReviewById(id);
  }


  async deleteReview(
    id: number,
  ): Promise<void> {

    const review =
      await this.getReviewById(id);

    await this.reviewRepository.delete(
      review.id,
    );
  }

}