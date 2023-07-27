import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:GlobalService, private router:Router) { }

  ngOnInit(): void {

  }
signUp(data:any){
 const setObj = {
  userId: data.userId,
  password: data.password
 }
 this.service.addRecord('users',setObj).subscribe(()=>{
  alert('Account Created successfully  please Log in')
  this.router.navigate([''])
 })
}

}
