import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { History } from '../interfaces/history';
import { HistoryManagerService } from '../services/history-manager.service';

@Component({
  selector: 'app-history-detail-page',
  templateUrl: './history-detail-page.page.html',
  styleUrls: ['./history-detail-page.page.scss'],
})
export class HistoryDetailPagePage implements OnInit {
  public history: History;

  public purchaseDate: Date;

  constructor(
    private route: ActivatedRoute,
    private historyService: HistoryManagerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.history = this.historyService.getHistoryById(parseInt(params.id, 10));
        this.purchaseDate = new Date(this.history.purchaseDate);
      }
    });
  }
}
