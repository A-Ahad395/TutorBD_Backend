import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { Tuition } from './tuition.entity';
import { CreateTuitionDto } from './dto/create-tuition.dto';
import { UpdateTuitionDto } from './dto/update-tuition.dto';
import { UpdateTuitionStatusDto } from './dto/update-tuition-status.dto';


@Injectable()
export class TuitionService {

  constructor(
    @InjectRepository(Tuition)
    private tuitionRepository: Repository<Tuition>,
  ) {}


  async createTuition(
    dto: CreateTuitionDto,
  ): Promise<Tuition> {

    return this.tuitionRepository.save(dto);
  }


  async getAllTuitions(): Promise<Tuition[]> {

    return this.tuitionRepository.find();
  }


  async searchTuition(
    title: string,
  ): Promise<Tuition[]> {

    return this.tuitionRepository.find({
      where: {
        title: Like(`%${title}%`),
      },
    });
  }


  async getTuitionById(
    id: number,
  ): Promise<Tuition> {

    const tuition =
      await this.tuitionRepository.findOneBy({
        id: id,
      });

    if (!tuition) {
      throw new NotFoundException(
        `Tuition with ID ${id} not found`,
      );
    }

    return tuition;
  }


  async updateTuition(
    id: number,
    dto: UpdateTuitionDto,
  ): Promise<Tuition> {

    const tuition =
      await this.getTuitionById(id);

    await this.tuitionRepository.update(
      id,
      dto,
    );

    return this.getTuitionById(id);
  }


  async updateTuitionStatus(
    id: number,
    dto: UpdateTuitionStatusDto,
  ): Promise<Tuition> {

    await this.getTuitionById(id);

    await this.tuitionRepository.update(
      id,
      dto,
    );

    return this.getTuitionById(id);
  }


  async deleteTuition(
    id: number,
  ): Promise<void> {

    const tuition =
      await this.getTuitionById(id);

    await this.tuitionRepository.delete(
      tuition.id,
    );
  }
}