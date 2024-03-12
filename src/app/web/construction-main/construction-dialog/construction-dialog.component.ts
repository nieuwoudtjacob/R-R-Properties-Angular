import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construction-dialog',
  templateUrl: './construction-dialog.component.html',
  styleUrls: ['./construction-dialog.component.scss']
})
export class ConstructionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConstructionDialogComponent>,
    private router: Router
  ) { }
  close() {
    this.dialogRef.close();
  }

  goAnnouncement() {
    this.dialogRef.close();
    let route = 'announcements';
    this.router.navigate([route]);
  }
}
