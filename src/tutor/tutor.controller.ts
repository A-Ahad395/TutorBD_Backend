import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TutorService } from './tutor.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@Controller('tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post()
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.create(createTutorDto);
  }

  @Get()
  findAll(@Query('subject') subject?: string) {
    return this.tutorService.findAll(subject);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutorDto: UpdateTutorDto) {
    return this.tutorService.update(+id, updateTutorDto);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.replace(+id, createTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorService.remove(+id);
  }

  @Post(':id/schedule')
  addSchedule(@Param('id') id: string, @Body('timeSlot') timeSlot: string) {
    return this.tutorService.addSchedule(+id, timeSlot);
  }

  @Get(':id/schedule')
  getSchedule(@Param('id') id: string, @Query('date') date: string) {
    return this.tutorService.getSchedule(+id, date);
  }
}
