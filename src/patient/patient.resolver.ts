import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Gender, PatientModel } from './patient.model';
import { TimelineModel } from '../timeline/timeline.model';
import { TimelineService } from 'src/timeline/timeline.service';
import { PatientService } from './patient.service';
import dayjs from 'dayjs';
@Resolver((of) => PatientModel)
export class PatientResolver {
  constructor(
    @Inject(TimelineService) private timelineService: TimelineService,
    @Inject(PatientService) private patientService: PatientService,
  ) {}
  @Query((returns) => PatientModel)
  async patient(@Args('id') id: string): Promise<PatientModel> {
    return await this.patientService.findOne(id);
  }
  @ResolveField((returns) => [TimelineModel])
  async timelines(@Parent() patient) {
    const { id } = patient;
    return this.timelineService.findByPatient(id);
  }
  @Query((returns) => [PatientModel])
  async patients(): Promise<PatientModel[]> {
    const patients = await this.patientService.findAll();
    const sortedPatients = patients.sort(
      (a, b) => dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix(),
    );
    return sortedPatients;
  }
  @Mutation((returns) => PatientModel)
  async createPatient(
    @Args('id', { nullable: true }) id: string,
    @Args('gender') gender: Gender,
    @Args('age') age: number,
    @Args('occupation') occupation: string,
  ): Promise<PatientModel> {
    return await this.patientService.create({ id, gender, age, occupation });
  }

  @Mutation((returns) => Boolean)
  async removePatient(@Args('id') id: string): Promise<Boolean> {
    await this.timelineService.removeByPatient(id);
    return await this.patientService.remove(id);
  }

  @Mutation((returns) => TimelineModel)
  async createTimeline(
    @Args('id', { nullable: true }) id: string,
    @Args('patientId') patientId: string,
    @Args('fromDate') fromDate: Date,
    @Args('toDate') toDate: Date,
    @Args('detail') detail: string,
    @Args('locationType') locationType: string,
    @Args('locationName', { nullable: true }) locationName: string,
  ): Promise<TimelineModel> {
    return await this.timelineService.create({
      id,
      patientId,
      fromDate,
      toDate,
      detail,
      locationType,
      locationName,
    });
  }

  @Mutation((returns) => Boolean)
  async removeTimeline(@Args('id') id: string): Promise<Boolean> {
    return await this.timelineService.remove(id);
  }
}
