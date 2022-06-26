import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'docturs';
  list: any = [
    { name: 'mohamed', job: 'opthalmomgist', location: "portsaid", price: 200, phone: "012345678901", img: "1.jpg" },
    { name: 'randa', job: 'techar', location: "alex", price: 400, phone: "789002736278", img: "2.jpg" },
    { name: 'fady', job: 'dintast', location: "cario", price: 50, phone: "122121123", img: "3.jpeg" },
    { name: 'aya', job: 'opthalmomgist', location: "mansura", price: 120, phone: "6828028202", img: "4.png" },
    { name: 'temon ', job: 'mental', location: "disny", price: 2000, phone: "68192700", img: "5.jpg" },
  ]


  newList = this.list 

  constructor() { }

  ngOnInit(): void {
  }

  data:any = ""

  changeFn(): void {
    console.log(this.data) 
    this.newList = this.list.filter((el:any)=>{
        console.log(el.name) 
      return el.name === this.data }) 
    console.log(this.data)
  }
}


