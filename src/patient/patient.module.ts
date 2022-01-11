import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { TimelineModule } from 'src/timeline/timeline.module';
import { PatientModel } from './patient.model';
import { PatientService } from './patient.service';
import { PatientResolver } from './patient.resolver';

@Module({
  imports: [
    forwardRef(() => TimelineModule),
    TypeOrmModule.forFeature([PatientModel]),
  ],
  providers: [PatientService, PatientResolver],
  exports: [PatientService],
})
export class PatientModule {}
