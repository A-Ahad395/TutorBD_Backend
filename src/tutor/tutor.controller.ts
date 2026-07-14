import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TutorService } from './tutor.service';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';

@Controller('tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post()
  create(@Body() createTutorDto: CreateTutorDto) {
    return this.tutorService.create(createTutorDto);
  }

  @Get('null-names')
  findNullFullNames() {
    return this.tutorService.findNullFullNames();
  }

  @Patch(':id/phone')
  updatePhone(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.tutorService.updatePhone(id, updatePhoneDto.phone);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorService.remove(id);
  }
}
