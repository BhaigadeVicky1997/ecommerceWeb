import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/shared/services/cartservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor(public cart:CartserviceService) { }
  flag:any;
  ngOnInit(): void {
    this.cart.data.subscribe(res=>{
      console.log(res);
      this.flag = res;
    })
  }

  ngAfterViewInit(){
 
  }
}
