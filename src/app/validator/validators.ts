import { FormControl, FormGroup } from '@angular/forms';
export function mobileValidator(control: FormControl): any {
  const myReg = /^1(3|4|5|7|8)\d{9}$/;
  const valid = myReg.test(control.value);
  console.log('Mobile verification:' + valid);
  return valid ? null : { 'mobile': true };
}

export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const cPassword: FormControl = group.get('confirmPass') as FormControl;
  let valid = null;
  if (password && cPassword) {
    valid = (password.value === cPassword.value);
  }
  return valid ? null : {
    'equal': {
      desc: 'Passwords don\'t match'
    }
  };
}
