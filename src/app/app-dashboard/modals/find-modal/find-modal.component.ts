import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-find-modal',
  templateUrl: './find-modal.component.html',
  styleUrls: ['./find-modal.component.scss']
})
export class FindModalComponent implements OnInit {

  constructor (@Inject(MAT_DIALOG_DATA) data: any) { }

  ngOnInit(): void {
  }

}
