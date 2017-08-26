import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results;
  searchPattern = '';

  constructor(private http: Http, private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.addData({search: 'pattern'});
    // const searchUrl = `http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=1710&lyricCheckSum=1bc24124e168aa20d99e462cabb82942`;
    // this.http.get(searchUrl).subscribe(data => {
    //   // Read the result field from the JSON response.
    //   this.results = data['results'];
    // });
  }
  grouphandle() {
    this.historyService.addData({search: this.searchPattern});
    console.log(this.searchPattern);
  }

}
