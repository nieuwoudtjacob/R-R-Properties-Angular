import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  reworkeddata: any;
  UserName: string;
  Password: string;
  isloading: boolean;
  ResponseMessage: any;
  ResponseCode: any;
  retryCount = 0;
  constructor(private userService: UserService, private router: Router,) {
  }

  ngOnInit(): void {

  }


  Submit() {
    this.getUser();
    if (this.UserName == undefined || this.Password == undefined) {
      this.displayPopupError();
    } else {
      Swal.fire({
        title: 'Verifying User...',
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()

        }
      });
    }
  }




  toApp() {
    localStorage.setItem('validUser', 'Yes');
    let route = '/web-app';
    this.router.navigate([route]);

  }


  toWebPage() {
    // let route = '/web-home';
    // this.router.navigate([route]);
    // window.open("https://www.rrealestate.co.za/");
  }


  getUserAPICall() {
    var temp: any;
    this.userService.getUser(this.UserName, this.Password).subscribe((data: {}) => {
      temp = data;
      console.log(temp)

      this.ResponseMessage = temp.messages[0].message;
      this.ResponseCode = temp.messages[0].code;

      console.log(this.ResponseMessage)

      this.reworkeddata = temp.response.data[0].fieldData
      localStorage.setItem('userRecordID', temp.response.data[0].recordId);
      console.log(this.reworkeddata)
    },
      err => {
        Swal.close();
        this.displayPopupError();
      },
      () => {

        if (this.ResponseMessage == 'OK') {
          if (this.reworkeddata.Username == this.UserName && this.reworkeddata.Password == this.Password) {
            Swal.close();
            localStorage.setItem('user', JSON.stringify(this.reworkeddata));
            this.toApp();
          }

        } else if (this.ResponseMessage == 'No records match the request') {
          Swal.close();
          this.displayPopupErrorNoUserFound();
        } else if (this.ResponseMessage == "Invalid FileMaker Data API token (*)") {
          setTimeout(() => {

            this.retryCount++
            if (this.retryCount == 5) {
              Swal.close();
              this.displayPopupError();
              this.retryCount = 0;
            } else {
              this.getUserAPICall();
            }
          }, 5000);

        }

      }
    );
  }


  getUser() {
    var temp: any;
    this.userService.getUser(this.UserName, this.Password).subscribe((data: {}) => {
      temp = data;
      console.log(temp)

      this.ResponseMessage = temp.messages[0].message;
      this.ResponseCode = temp.messages[0].code;

      console.log(this.ResponseMessage)

      this.reworkeddata = temp.response.data[0].fieldData
      localStorage.setItem('userRecordID', temp.response.data[0].recordId);
      console.log(this.reworkeddata)
    },
      err => {
        Swal.close();
        this.displayPopupError();
      },
      () => {

        if (this.ResponseMessage == 'OK') {
          if (this.reworkeddata.Username == this.UserName && this.reworkeddata.Password == this.Password) {
            Swal.close();
            localStorage.setItem('user', JSON.stringify(this.reworkeddata));
            this.toApp();
          }

        } else if (this.ResponseMessage == 'No records match the request') {
          Swal.close();
          this.displayPopupErrorNoUserFound();
        } else if (this.ResponseMessage == "Invalid FileMaker Data API token (*)") {
          this.getUserAPICall();
        }

      }
    );

  }


  displayPopupError() {

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
      icon: 'error',
      title: this.ResponseMessage + ' : ' + this.ResponseCode
    })
  }

  displayPopupErrorNoUserFound() {

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
      icon: 'error',
      title: 'User Name or Password Invalid Please retry'
    })
  }
}
