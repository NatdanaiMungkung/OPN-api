import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { TimelineModel } from './timeline.model';
import { TimelineService } from './timeline.service';
import { PatientModule } from 'src/patient/patient.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimelineModel]),
    forwardRef(() => PatientModule),
  ],
  providers: [TimelineService],
  exports: [TimelineService],
})
export class TimelineModule {}
