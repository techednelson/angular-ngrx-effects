import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromUsers from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    public usersService: UserService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(fromUsers.LOAD_USERS),
    switchMap(() => this.usersService.findUser().pipe(
      map(users => new fromUsers.LoadUsersSuccess(users)),
      catchError(error => of(new fromUsers.LoadUsersFail(error)))
    ))
  );
}
