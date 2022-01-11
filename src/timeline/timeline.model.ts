import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class TimelineModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Field()
  @Column({ length: 500, nullable: false })
  patientId: string;
  @Field()
  @CreateDateColumn()
  fromDate: Date;
  @Field()
  @CreateDateColumn()
  toDate: Date;
  @Field()
  @Column('text', { nullable: false })
  detail: string;
  @Field()
  @Column('varchar', { length: 50 })
  locationType: string;
  @Field()
  @Column('varchar', { length: 50 })
  locationName: string;
  @Field()
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: string;
}
