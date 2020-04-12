import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor(private http:HttpClient ) { }

  ngOnInit(){
  //  let res= this.http.post("http://106.51.38.64:9999/SumadhuraGateway/employeeservice/financial/raisedMilestoneSites.spring");
  //  res.subscribe((data)=> console.log(data));
  //   }
    
  }
}

