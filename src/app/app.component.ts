import { Component, OnInit } from '@angular/core';
import { faCoffee, faHouse, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/services/user.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { throttleTime } from 'rxjs';

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor() { }

}
