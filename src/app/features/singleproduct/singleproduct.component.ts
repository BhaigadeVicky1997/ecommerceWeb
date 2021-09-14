import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewPopupComponent } from 'src/app/shared/popup/review-popup/review-popup.component';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  main_prodcut_image:any;
  datas:any;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  changeImage(element:any) {
    console.log(element);
    this.main_prodcut_image = document.getElementById('main_product_image');
    this.main_prodcut_image.src = element.src;
  }

  openDialog() {

    const dialogRef = this.dialog.open(ReviewPopupComponent, {
      disableClose: true,
      height: '500px',
      width: '1000vh',
    });

  }

}
