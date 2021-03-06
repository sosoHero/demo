import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Account } from '../models/account';
import { State } from './state';
import { MockAccounts } from '../mocks/mock-accounts';

@Injectable()
export class AccountService implements OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(private state: State) { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  init() {
    this.state.authentication.user
      .takeUntil(this.unsubscribe)
      .map(user => user && user.id)
      .distinctUntilChanged()
      .switchMap(userId => this.getAccounts())
      .subscribe(accounts => {
        this.state.accounts.setAccounts(accounts);
      });
  }

  private getAccounts(): Observable<Account[]> {
    return Observable.of(MockAccounts);
  }
}
