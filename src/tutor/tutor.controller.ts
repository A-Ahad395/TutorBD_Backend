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
  UseInterceptors,
  ParseFilePipe,
  UploadedFile,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TutorService } from './tutor.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@Controller('tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post()
  @UseInterceptors(FileInterceptor('nidImage'))
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 2 * 1024 * 1024,
          }),
        ],
      }),
    )
    file: Buffer,

    @Body() createTutorDto: CreateTutorDto,
  ) {
    return this.tutorService.create(createTutorDto, file);
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
