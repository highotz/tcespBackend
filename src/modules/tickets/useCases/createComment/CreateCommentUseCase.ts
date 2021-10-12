import { inject, injectable } from "tsyringe";
import { ICreateCommentDTO } from "../../dtos/ICreateCommentDTO";

import { Comment } from "../../entities/Comment";
import { CommentRepository } from "../../repositories/implementations/CommentRepository";

@injectable()
class CreateCommentUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: CommentRepository
  ) {}

  async execute({ comment }: ICreateCommentDTO): Promise<Comment> {
    const ticketComment = await this.commentsRepository.create({ comment });

    return ticketComment;
  }
}

export { CreateCommentUseCase };
