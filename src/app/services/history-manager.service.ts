import { Injectable } from '@angular/core';
import { History } from '../interfaces/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryManagerService {
  private history: History[] = [];

  constructor() { }

  getAllHistory() {
    return [...this.history];
  }

  addNewHistory(history: History) {
    this.history = this.history.concat(history);
  }
}
