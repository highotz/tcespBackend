import { Comment } from "../entities/Comment";

interface ICommentsRepository {
  create(comment: string): Promise<Comment>;
}

export { ICommentsRepository };
