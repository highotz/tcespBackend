import { inject, injectable } from "tsyringe";

import { Comment } from "../../entities/Comment";
import { CommentRepository } from "../../repositories/implementations/CommentRepository";

interface IResponse {
  teste: string;
  id: string;
}
@injectable()
class CreateCommentUseCase {
  constructor(
    @inject("CommentRepository")
    private commentsRepository: CommentRepository
  ) {}

  async execute(comment: string, { teste }: IResponse): Promise<Comment> {
    const ticketComment = await this.commentsRepository.create(comment);

    return ticketComment;
  }
}

export { CreateCommentUseCase };
