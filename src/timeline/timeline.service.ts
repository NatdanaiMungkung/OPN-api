import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimelineModel } from './timeline.model';

@Injectable()
export class TimelineService {
  constructor(
    @InjectRepository(TimelineModel)
    private timelineRepository: Repository<TimelineModel>,
  ) {}

  create(details: TimelineModel): Promise<TimelineModel> {
    return this.timelineRepository.save(details);
  }

  findAll(): Promise<TimelineModel[]> {
    return this.timelineRepository.find();
  }

  findByPatient(patientId: string): Promise<TimelineModel[]> {
    return this.timelineRepository.find({ patientId });
  }

  async remove(id: string): Promise<boolean> {
    const toRemove = await this.timelineRepository.find({ id });
    if (toRemove) {
      this.timelineRepository.remove(toRemove);
      return true;
    }
    return false;
  }

  async removeByPatient(patientId: string): Promise<boolean> {
    const toRemove = await this.timelineRepository.find({ patientId });
    if (toRemove) {
      this.timelineRepository.remove(toRemove);
      return true;
    }
    return false;
  }
}
