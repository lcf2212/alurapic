import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
  const userName = formGroup.get("userName").value;
  const password = formGroup.get("password").value;

  return userName != password || !(password.trim() + userName.trim())
    ? null
    : { userNamePassword: true };
};
