import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "../../accounts/entities/User";
import { Ticket } from "./Ticket";

@Entity('comments')
class Comment {
  @PrimaryColumn()
  id: string;

  @Column()
  comment: string;

  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  userId: User;

  @Column()
  ticket_id: number;

  @JoinColumn({ name: "ticket_id" })
  @ManyToOne(() => Ticket)
  ticketId: Ticket;

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

export { Comment };
