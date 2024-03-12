import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ResetDialogComponent } from '../reset-dialog/reset-dialog.component';
import { UserService } from 'src/services/user.service';
defineElement(lottie.loadAnimation);
import { Location } from '@angular/common';
export interface DialogData {
  newPassword: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  newPassword: string;
  recordID: any;

  constructor(public dialog: MatDialog, private userService: UserService, private _location: Location) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.recordID = localStorage.getItem('userRecordID');
  }

  ngOnInit(): void {
    // this._location.go('web-app');
    // if (this.user.Flag_Temp_Password == 0) {

    //   this.openDialog();
    // }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResetDialogComponent, {
      data: { newPassword: this.newPassword }, disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newPassword = result.data;

      if (this.newPassword != undefined || this.newPassword != null) {


        console.log("work");
        this.userService.updateUserTempPassword(this.newPassword, this.recordID, this.user).subscribe((data: {}) => {
          console.log(data)
          // const Toast = Swal.mixin({
          //   toast: true,
          //   position: 'top-end',
          //   showConfirmButton: false,
          //   timer: 3000,
          //   timerProgressBar: true,
          //   didOpen: (toast) => {
          //     toast.addEventListener('mouseenter', Swal.stopTimer)
          //     toast.addEventListener('mouseleave', Swal.resumeTimer)
          //   }
          // })

          // Toast.fire({
          //   icon: 'success',
          //   title: 'Password has been updated'
          // })
        });
      }
    });
  }



}
