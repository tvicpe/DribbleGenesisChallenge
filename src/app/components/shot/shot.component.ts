import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss']
})
export class ShotComponent implements OnInit {
  public shotDetails: any;

  constructor(private route: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit() {
    this.getShot();
  }

  public getShot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getData(id);
  }

  private getData(id: number): void {
    this.api.getDetailedJson(id).subscribe((response: any) => {
      if (response.status) {
        if (response && response.status) {
          this.shotDetails = response.data;
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
