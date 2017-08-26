import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {
  historyData = [];

  addData(data) {
    this.historyData.push(data);
  }

  getHistory() {
    return this.historyData;
  }

}
