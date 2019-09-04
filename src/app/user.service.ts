import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDatasource, IGetRowsParams } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IDatasource{

  constructor() { }

  public getUsers(startIndex: number = 0, endIndex: number = 10): Observable<User[]> {
    return of(this.generateUsers(startIndex, endIndex));
  }

  private generateUsers(startIndex: number = 0, endIndex: number = 10): User[] {
    const users: User[] = [];

    for (let i = startIndex; i < endIndex; i++) {
        users.push({
          id: String(i),
          name: `Name ${i}`,
          email: `mail${i}@example.com`,
          birthDate: new Date(`1.1.200${i}`)
        });
    }

    return users;
  }

  public getRows(params: IGetRowsParams): void {
    const { startRow, endRow, filterModel, successCallback } = params;

    this.getUsers(startRow, endRow)
      .subscribe(users => successCallback(users));
  }

}

export interface User {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
}
