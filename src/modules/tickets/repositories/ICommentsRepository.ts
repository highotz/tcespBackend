import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";
import { Comment } from "../entities/Comment";

interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
}

export { ICommentsRepository };
