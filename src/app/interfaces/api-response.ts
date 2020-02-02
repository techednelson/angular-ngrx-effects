import { User } from '../models/user.model';

export interface ApiResponse extends Response {
  readonly data: User[];
}
