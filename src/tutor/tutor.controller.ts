import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TutorService } from './tutor.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { CreateQualificationDto } from './dto/create-qualification.dto';

@UsePipes(new ValidationPipe())
@Controller('tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post()
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.create(createTutorDto);
  }

  @Get()
  findAll() {
    return this.tutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorService.findOne(id);
  }

  @Patch(':id/phone')
  updatePhone(@Param('id') id: string, @Body('phone') phone: string) {
    return this.tutorService.updatePhone(id, phone);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorService.remove(id);
  }

  @Post(':id/qualifications')
  addQualification(
    @Param('id') id: string,
    @Body() createQualDto: CreateQualificationDto,
  ) {
    return this.tutorService.addQualification(id, createQualDto);
  }

  @Get(':id/qualifications')
  getQualifications(@Param('id') id: string) {
    return this.tutorService.getQualifications(id);
  }

  @Delete('qualifications/:qualId')
  removeQualification(@Param('qualId') qualId: number) {
    return this.tutorService.removeQualification(qualId);
  }
}
