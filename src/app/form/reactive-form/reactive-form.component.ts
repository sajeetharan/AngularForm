import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { equalValidator, mobileValidator } from '../../validator/validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formModel: FormGroup;
  model = {
    'hobbys': ['Coding', 'Movies', 'Travel']
  };
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['Sajee', [Validators.required, Validators.minLength(6)]],
      mobile: ['773304035', mobileValidator],
      hobby: ['-Please select-'],
      passwords: fb.group({
        password: ['123456', Validators.minLength(6)],
        confirmPass: ['123456']
      }, {
          validator: equalValidator
        })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit reactive');
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
