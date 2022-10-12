import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.datas().subscribe(
      (data)=>{
        this.userData = data
      }
    )
  }

  userData:any = {}
  ngOnInit(): void {
  }

}
