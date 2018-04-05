import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-six-shots',
  templateUrl: './six-shots.component.html',
  styleUrls: ['./six-shots.component.scss']
})
export class SixShotsComponent implements OnInit {
  allItems: any[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.api.getJson().subscribe((response) => {
      if (response.status) {
        if (response && response.status) {
          this.allItems = response.data.list;
        }
      }
      else {
        console.error('Error: ', response.error);
      }
    }, (error) => {
      console.log('Error', error);
      console.warn(error);
    });
  }

}
