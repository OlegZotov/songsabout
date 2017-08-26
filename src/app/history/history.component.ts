import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history;
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    const data = this.historyService.getHistory();
    console.log(data);
    this.history = data;
  }

}
