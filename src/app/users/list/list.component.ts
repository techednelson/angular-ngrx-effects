import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as fromUsers from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public users: User[] = [];
  public loading: boolean;
  public error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('users').subscribe(users =>  {
      this.users = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });
    this.store.dispatch(new fromUsers.LoadUsers());
  }
}
