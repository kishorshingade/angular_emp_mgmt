import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any
  empData:any
  constructor(private route:ActivatedRoute , private service:GlobalService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((para)=>{
      this.id = para.get("_id")
      this.service.getRecord('employee',this.id).subscribe((res)=>{
        this.empData = res
      })
    })
}
Update(data:any){
  const empInfo ={
    id: this.id,
    img: data.img,
    name: data.name,
    city: data.city,
    education: data.education,
    role: data.role,
    salary: data.salary
  }
  this.service.updateRecord('employee',empInfo).subscribe(()=>{
    alert('Reord Updated')
   this.router.navigate(['/header'])
  })
}
}