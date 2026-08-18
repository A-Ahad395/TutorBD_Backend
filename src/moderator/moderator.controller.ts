import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { ModeratorService } from './moderator.service';

import { CreateModeratorDto } from './dto/create-moderator.dto';
import { UpdateModeratorDto } from './dto/update-moderator.dto';
import { UpdateModeratorStatusDto } from './dto/update-moderator-status.dto';

@Controller('moderator')
export class ModeratorController {
  constructor(private readonly moderatorService: ModeratorService) {}

  // Create Moderator
  @Post()
  create(@Body() dto: CreateModeratorDto) {
    return this.moderatorService.create(dto);
  }

  // Get All Moderators
  @Get()
  findAll() {
    return this.moderatorService.findAll();
  }

  // Get Moderator By ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moderatorService.findOne(id);
  }

  // Update Moderator
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateModeratorDto,
  ) {
    return this.moderatorService.update(id, dto);
  }

  // Update Moderator Status
  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateModeratorStatusDto,
  ) {
    return this.moderatorService.updateStatus(id, dto);
  }

  // Delete Moderator
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.moderatorService.remove(id);
  }
}