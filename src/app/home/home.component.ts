import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'docturs';
  list: any = [
    { name: 'mohamed ahmed', job: 'opthalmomgist', location: "portsaid", price: 200, phone: "012345678901", img: "1.jpg" },
    { name: 'randa mohamed', job: 'techar', location: "alex", price: 400, phone: "789002736278", img: "2.jpg" },
    { name: 'fady salah', job: 'dintast', location: "cario", price: 50, phone: "122121123", img: "3.jpeg" },
    { name: 'aya magdy', job: 'opthalmomgist', location: "mansura", price: 120, phone: "6828028202", img: "4.png" },
    { name: 'temon and bomba', job: 'mental', location: "disny", price: 2000, phone: "68192700", img: "5.jpg" },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
