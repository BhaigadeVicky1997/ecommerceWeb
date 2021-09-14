import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/mockdata/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public navdata: NavigationService) { }

  ngOnInit(): void {
  }

}
