import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() progress = 0;
  @Input() loading: boolean;
  doneloading: boolean;
  constructor() { }

  ngOnInit(): void {

  }

}
