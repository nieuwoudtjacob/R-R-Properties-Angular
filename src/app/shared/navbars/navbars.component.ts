import { Component, HostListener, OnInit } from '@angular/core';
import { faCoffee, faHouse, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/services/user.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { throttleTime } from 'rxjs';
import { Location } from '@angular/common';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {

  BearerToken: string;
  faCoffee = faCoffee;
  faHouse = faHouse;
  faInvoice = faFileInvoice;
  user: any;
  loginValidInterval: any;
  userValidInterval: any;

  constructor(
    private userService: UserService,
    private bnIdle: BnNgIdleService,
    private router: Router,
    private _location: Location

  ) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(localStorage.getItem('user'));
    let route = 'web-app';
    this.router.navigate([route, { outlets: { 'appcontent': ['properties'] } }]);

  }


  // @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
  //   this.user = undefined;
  //   localStorage.clear();

  //   let route = 'client-login';
  //   this.router.navigate([route]);

  // }


  ngOnInit() {

    this._location.go('web-app');


    this.bnIdle.startWatching(600).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        localStorage.clear();
        let route = 'client-login';
        this.router.navigate([route]);
      }
    });


    setTimeout(() => {
      this.checkIfLoginValid();

      if (this.user.Username == undefined) {
        let route = 'client-login';
        this.router.navigate([route]);
      } else {
        this.displayPopupWelcome();
      }
    }, 1000);
  }

  checkIfLoginValid() {

    var isvalid = localStorage.getItem('validUser');

    // if (isvalid != 'Yes') {
    //   localStorage.clear();
    //   let route = 'client-login';
    //   this.router.navigate([route]);
    // }

  }

  logOut() {
    localStorage.clear();
    let route = '/client-login';
    this.router.navigate([route]);
  }

  displayPopupWelcome() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Welcome back ' + this.user.Username
    })
  }
}
