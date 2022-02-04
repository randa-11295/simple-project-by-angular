import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {



  constructor(private fb: FormBuilder) { }
  
  profileForm = this.fb.group({
    name: ['' ,[ Validators.required,Validators.pattern(/^[a-zA-Z]+$/) , Validators.minLength(3)]],
    age: ['' ,[ Validators.required]],
    mail : ['', [Validators.email , Validators.required]],

          address: this.fb.group({
            street: ['', [Validators.pattern(/^[a-zA-Z]+$/) ]],
            city: ['' ,[Validators.pattern(/^[a-zA-Z]+$/)  ]],
            state: ['' ,[Validators.pattern(/^[a-zA-Z]+$/)  ]],
            zip: ['' ,[Validators.pattern(/^[a-zA-Z]+$/) ]]
          }),
  })

  ngOnInit(): void {
  }

  submiting(){
    alert('your data was send')
  }

}
