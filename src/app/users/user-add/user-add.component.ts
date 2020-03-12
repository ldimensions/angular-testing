import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  saveUserMsg: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]
      ]
    });
  }

  get f() { return this.userForm.controls; }

  saveUsers() {
    this.saveUserMsg = '';
    if (this.userForm.invalid) {
      this.saveUserMsg = 'failed';
      return this.saveUserMsg;
    }
    this.saveUserMsg = 'Suceess';
    return this.saveUserMsg;
  }

}
