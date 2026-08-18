import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Moderator } from './entities/moderator.entity';

import { CreateModeratorDto } from './dto/create-moderator.dto';
import { UpdateModeratorDto } from './dto/update-moderator.dto';
import { UpdateModeratorStatusDto } from './dto/update-moderator-status.dto';

@Injectable()
export class ModeratorService {
  constructor(
    @InjectRepository(Moderator)
    private readonly moderatorRepository: Repository<Moderator>,
  ) {}

  // Create Moderator
  async create(createModeratorDto: CreateModeratorDto) {
    const existingModerator = await this.moderatorRepository.findOne({
      where: {
        email: createModeratorDto.email,
      },
    });

    if (existingModerator) {
      throw new ConflictException('Moderator already exists');
    }

    const hashedPassword = await bcrypt.hash(
      createModeratorDto.password,
      10,
    );

    const moderator = this.moderatorRepository.create({
      ...createModeratorDto,
      password: hashedPassword,
    });

    return await this.moderatorRepository.save(moderator);
  }

  // Get All Moderators
  async findAll() {
    return await this.moderatorRepository.find();
  }

  // Get Moderator By ID
  async findOne(id: number) {
    const moderator = await this.moderatorRepository.findOne({
      where: { id },
    });

    if (!moderator) {
      throw new NotFoundException('Moderator not found');
    }

    return moderator;
  }

  // Update Moderator
  async update(
    id: number,
    updateModeratorDto: UpdateModeratorDto,
  ) {
    const moderator = await this.findOne(id);

    Object.assign(moderator, updateModeratorDto);

    return await this.moderatorRepository.save(moderator);
  }

  // Update Status
  async updateStatus(
    id: number,
    dto: UpdateModeratorStatusDto,
  ) {
    const moderator = await this.findOne(id);

    moderator.isActive = dto.isActive;

    return await this.moderatorRepository.save(moderator);
  }

  // Delete Moderator
  async remove(id: number) {
    const moderator = await this.findOne(id);

    await this.moderatorRepository.remove(moderator);

    return {
      message: 'Moderator deleted successfully',
    };
  }
}