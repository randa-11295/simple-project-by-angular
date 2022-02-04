import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
    title ='send'
    show = true;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.title = 'loding ';
    this.show = !this.show

    console.log('test')
    setTimeout(() => {
      this.title ='send'
      this.show =!this.show;
    }, 1000);

  }

}
