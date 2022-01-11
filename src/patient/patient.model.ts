import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  ChildEntity,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { TimelineModel } from '../timeline/timeline.model';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
@ObjectType()
@Entity()
export class PatientModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Field((type) => [TimelineModel], { nullable: true })
  @OneToMany((type) => TimelineModel, (timeline) => timeline.id)
  timelines?: TimelineModel[];
  @Field()
  @Column()
  gender: Gender;
  @Field()
  @Column()
  age: number;
  @Field()
  @Column({ length: 20, nullable: false })
  occupation: string;
  @Field()
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: string;
}
