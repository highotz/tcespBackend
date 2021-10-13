import { getRepository, Repository } from "typeorm";
import { Comment } from "../../entities/Comment";
import { ICommentsRepository } from "../ICommentsRepository";

class CommentRepository implements ICommentsRepository {
  private repository: Repository<Comment>;

  constructor() {
    this.repository = getRepository(Comment);
  }

  async create(comment: string): Promise<Comment> {
    const ticketComment = this.repository.create({
      comment,
    });

    await this.repository.save(ticketComment);

    return ticketComment;
  }
}

export { CommentRepository };
