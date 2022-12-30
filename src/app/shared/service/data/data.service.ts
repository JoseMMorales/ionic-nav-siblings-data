import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from '../models/data.interface';

@Injectable()
export class DataService {
  private data$: BehaviorSubject<Data> = new BehaviorSubject<Data>({} as Data);
  dataAlreadySet$ = this.data$.asObservable();
  constructor() {}

  setData(data: Data) {
    this.data$.next(data);
  }

  getData(): Observable<Data> {
    return this.dataAlreadySet$;
  }
}
