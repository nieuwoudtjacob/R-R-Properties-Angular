import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DialogData } from '../home/home.component';

@Component({
  selector: 'app-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.scss']
})
export class ResetDialogComponent implements AfterViewInit, OnInit {

  confirmPassword: string;

  constructor(public dialogRef: MatDialogRef<ResetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }

  MatchPassword() {
    if (this.data.newPassword == this.confirmPassword && this.data.newPassword != undefined) {



      Swal.fire({
        title: 'Are you sure about your new password?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Don't update`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.dialogRef.close({ data: this.data.newPassword });
        } else if (result.isDenied) {
        }
      })

    } else {
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
        title: 'Password does not match confrim password'
      })
    }
  }
}


