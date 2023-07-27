import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:GlobalService, private router:Router) { }

  ngOnInit(): void {
  }

  addRecord(data:any){
  const empObj ={
    img: data.img,
    name: data.name,
    city: data.city,
    education: data.education,
    role: data.role,
    salary: data.salary
  }
  this.service.addRecord('employee',empObj).subscribe(()=>{
    alert('Record Added')
    this.router.navigate(['/header'])
  })
}
}
