import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[Users] Load user';
export const LOAD_USER_FAIL = '[Users] Load user FAIL';
export const LOAD_USER_SUCCESS = '[Users] Load user SUCCESS';

export class LoadUser implements Action {
  public readonly type = LOAD_USER;
  constructor(public id: string) {
  }
}

export class LoadUserFail implements Action {
  public readonly type = LOAD_USER_FAIL;
  constructor(public payload: any) {
  }
}

export class LoadUserSuccess implements Action {
  public readonly type = LOAD_USER_SUCCESS;
  constructor(public user: User) {
  }
}

export type userActions = LoadUser | LoadUserFail | LoadUserSuccess;
