import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "../../accounts/entities/User";
import { Auditions } from "../../auditions/entities/Auditions";
import { City } from "../../city/entities/City";

@Entity("audits")
class Audits {
  @PrimaryColumn()
  id: string;

  @Column()
  observation: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: "city_id" })
  city: City;

  @Column()
  city_id: string;

  @ManyToOne(() => Auditions)
  @JoinColumn({ name: "auditions_id" })
  auditions: Auditions;

  @Column()
  auditions_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Audits };
