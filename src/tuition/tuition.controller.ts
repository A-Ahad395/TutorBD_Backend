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

import { TuitionService } from './tuition.service';

import { CreateTuitionDto } from './dto/create-tuition.dto';
import { UpdateTuitionDto } from './dto/update-tuition.dto';
import { UpdateTuitionStatusDto } from './dto/update-tuition-status.dto';


@Controller('tuition')
export class TuitionController {

  constructor(
    private readonly tuitionService: TuitionService,
  ) {}


  @Post()
  @UsePipes(new ValidationPipe())
  createTuition(
    @Body() dto: CreateTuitionDto,
  ) {
    return this.tuitionService.createTuition(dto);
  }


  @Get()
  getAllTuitions() {
    return this.tuitionService.getAllTuitions();
  }


  @Get('search')
  searchTuition(
    @Query('title') title: string,
  ) {
    return this.tuitionService.searchTuition(title);
  }


  @Get(':id')
  getTuitionById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.tuitionService.getTuitionById(id);
  }


  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateTuition(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTuitionDto,
  ) {
    return this.tuitionService.updateTuition(
      id,
      dto,
    );
  }


  @Patch(':id/status')
  @UsePipes(new ValidationPipe())
  updateTuitionStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTuitionStatusDto,
  ) {
    return this.tuitionService.updateTuitionStatus(
      id,
      dto,
    );
  }


  @Delete(':id')
  deleteTuition(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.tuitionService.deleteTuition(id);
  }
}