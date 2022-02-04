import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ductors',
  templateUrl: './ductors.component.html',
  styleUrls: ['./ductors.component.css']
})
export class DuctorsComponent implements OnInit {
 // title ='test'
  constructor() { }

  ngOnInit(): void {
  }
  
 @Input() item:any ='test';

 
}
