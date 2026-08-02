import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ReviewService } from './review.service';

import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';


@Controller('review')
export class ReviewController {

  constructor(
    private readonly reviewService: ReviewService,
  ) {}


  @Post()
  @UsePipes(new ValidationPipe())
  createReview(
    @Body() dto: CreateReviewDto,
  ) {
    return this.reviewService.createReview(dto);
  }


  @Get()
  getAllReviews() {
    return this.reviewService.getAllReviews();
  }


  @Get(':id')
  getReviewById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.reviewService.getReviewById(id);
  }


  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateReviewDto,
  ) {
    return this.reviewService.updateReview(
      id,
      dto,
    );
  }


  @Delete(':id')
  deleteReview(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.reviewService.deleteReview(id);
  }

}