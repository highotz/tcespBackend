import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from 'class-transformer'
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id_tecesp: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id_tecesp) {
      this.id_tecesp = uuid();
    }
  }
}

export { User };
