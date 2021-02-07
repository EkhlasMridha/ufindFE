import { Component, OnInit } from '@angular/core';
import { TesService } from '../../services/tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private testService: TesService,
  ) {
    this.testService.getData().subscribe((res) => {
      console.log('result');
      console.log(res);
    });
  }

  ngOnInit(): void { }
}
