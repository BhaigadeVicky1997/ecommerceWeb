import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupmodalComponent } from 'src/app/shared/popup/signupmodal/signupmodal.component';
@Component({
  selector: 'app-accordiondata',
  templateUrl: './accordiondata.component.html',
  styleUrls: ['./accordiondata.component.scss']
})
export class AccordiondataComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(dat: string) {

    const dialogRef = this.dialog.open(SignupmodalComponent, {
      data: { flag: dat || 'Guest' },
      disableClose: true,
      height: '500px',
      width: '1000vh',
    });
    dialogRef.afterOpened().subscribe(result => {
      console.log(result);
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
