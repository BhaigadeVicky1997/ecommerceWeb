import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/shared/services/cartservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public ser:CartserviceService) { }

  ngOnInit(): void {
   

  }

  templateView(t:any){
    console.log(t);
   this.ser.data.next(t);

  }

}
