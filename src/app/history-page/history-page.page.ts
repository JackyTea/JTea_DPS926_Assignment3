import { Component, OnInit } from '@angular/core';
import { History } from '../interfaces/history';
import { HistoryManagerService } from '../services/history-manager.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.page.html',
  styleUrls: ['./history-page.page.scss'],
})
export class HistoryPagePage implements OnInit {

  public history: History[];

  constructor(private historyService: HistoryManagerService) { }

  ngOnInit() {
    this.history = this.historyService.getAllHistory();
  }

}
