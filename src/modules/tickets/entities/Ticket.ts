import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { User } from "../../accounts/entities/User";
import { City } from "../../city/entities/City";

@Entity("tickets")
class Ticket {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  userId: User;

  @Column()
  city_id: string;

  @JoinColumn({ name: "city_id" })
  @ManyToOne(() => City)
  cityId: City;

  @Column()
  status: string;

  @Column()
  due_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export { Ticket };
