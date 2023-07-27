import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 empData:any
 tableName:string = "employee"
p: number = 1
term:any
  constructor(private service:GlobalService , private router:Router) { }

  ngOnInit(): void {
 this.getRecords()
  }
  getRecords(){
    this.service.getRecords(this.tableName).subscribe((res)=>{
      this.empData = res
    })
  }
  deleteRecord(_id:any){
  if(confirm(`do you want do delete id:${_id}`)){
    this.service.deleteRecords(this.tableName,_id).subscribe(()=>{
      alert('Record Deleted Successfully')
      this.getRecords()
    })
  }
  }
  logOut(){
    if((confirm("Do you want to Log out ?"))){
      this.service.signOut()
      this.router.navigate([''])
    }
  }
  }
