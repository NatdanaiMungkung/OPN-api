import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientResolver } from './patient/patient.resolver';
import { TimelineService } from './timeline/timeline.service';
import { PatientModule } from './patient/patient.module';
import { TimelineModule } from './timeline/timeline.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    PatientModule,
    TimelineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
