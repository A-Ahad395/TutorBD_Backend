import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Tutor } from './entities/tutor.entity';
import { Qualification } from './entities/qualification.entity';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { CreateQualificationDto } from './dto/create-qualification.dto';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private readonly tutorRepository: Repository<Tutor>,
    @InjectRepository(Qualification)
    private readonly qualificationRepository: Repository<Qualification>,
  ) {}

  async create(createTutorDto: CreateTutorDto) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(createTutorDto.password, salt);

      const newTutor = this.tutorRepository.create({
        ...createTutorDto,
        password: hashedPassword,
      });

      return await this.tutorRepository.save(newTutor);
    } catch (error) {
      throw new HttpException(
        'Failed to create tutor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.tutorRepository.find({
      relations: { qualifications: true },
    });
  }

  async findOne(id: string) {
    const tutor = await this.tutorRepository.findOne({
      where: { id },
      relations: { qualifications: true },
    });

    if (!tutor) {
      throw new NotFoundException(`Tutor with ID ${id} not found.`);
    }
    return tutor;
  }

  async updatePhone(id: string, phone: string) {
    const tutor = await this.findOne(id);
    tutor.phone = phone;
    return await this.tutorRepository.save(tutor);
  }

  async remove(id: string) {
    const result = await this.tutorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tutor with ID ${id} not found.`);
    }
    return { message: `Tutor with ID ${id} successfully removed.` };
  }

  async addQualification(
    tutorId: string,
    createQualDto: CreateQualificationDto,
  ) {
    const tutor = await this.findOne(tutorId);
    const newQual = this.qualificationRepository.create({
      ...createQualDto,
      tutor: tutor,
    });
    return await this.qualificationRepository.save(newQual);
  }

  async getQualifications(tutorId: string) {
    return await this.qualificationRepository.find({
      where: { tutor: { id: tutorId } },
    });
  }

  async removeQualification(qualId: number) {
    const result = await this.qualificationRepository.delete(qualId);
    if (result.affected === 0) {
      throw new NotFoundException(`Qualification with ID ${qualId} not found.`);
    }
    return { message: `Qualification successfully deleted.` };
  }
}
