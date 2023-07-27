import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:any
 pass:any
 empData:any
  constructor(private service:GlobalService ,private router:Router) { }

  ngOnInit(): void {
 this.service.signOut()
  }
logIn(){
this.service.getRecords('users').subscribe((res)=>{
  this.empData = res
  const data = this.empData.filter((item:any)=>{
    return item.userId == this.user && item.password == this.pass
  
  })
  if(data.length > 0){
    this.service.signIn(this.user)
    this.router.navigate(['/header'])
  }else{
    alert("Invalid")
    this.user = ""
    this.pass = ""
  }
})
}
}