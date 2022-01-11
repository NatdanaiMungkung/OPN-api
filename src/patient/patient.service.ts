import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientModel } from './patient.model';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientModel)
    private patientRepository: Repository<PatientModel>,
  ) {}

  create(details: PatientModel): Promise<PatientModel> {
    return this.patientRepository.save(details);
  }

  findAll(): Promise<PatientModel[]> {
    return this.patientRepository.find();
  }

  findOne(id: string): Promise<PatientModel> {
    return this.patientRepository.findOne(id);
  }

  async remove(id: string): Promise<boolean> {
    const toRemove = await this.patientRepository.find({ id });
    if (toRemove) {
      this.patientRepository.remove(toRemove);
      return true;
    }
    return false;
  }
}
