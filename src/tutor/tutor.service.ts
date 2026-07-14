import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Tutor } from './entities/tutor.entity';
import { CreateTutorDto } from './dto/create-tutor.dto';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private readonly tutorRepository: Repository<Tutor>,
  ) {}

  async create(createTutorDto: CreateTutorDto) {
    const newTutor = this.tutorRepository.create(createTutorDto);
    return await this.tutorRepository.save(newTutor);
  }

  async updatePhone(id: string, phone: string) {
    const tutor = await this.tutorRepository.findOne({ where: { id } });
    if (!tutor) {
      throw new NotFoundException(`Tutor with ID ${id} not found.`);
    }
    tutor.phone = phone;
    return await this.tutorRepository.save(tutor);
  }

  async findNullFullNames() {
    return await this.tutorRepository.find({
      where: { fullName: IsNull() },
    });
  }

  async remove(id: string) {
    const result = await this.tutorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tutor with ID ${id} not found.`);
    }
    return { message: `Tutor with ID ${id} successfully removed.` };
  }
}
