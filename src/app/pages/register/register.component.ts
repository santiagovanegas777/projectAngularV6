import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private RegisterService: RegisterService) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      lastName: [''],
      city: ['']
    });
  }

  public handleSubmit(): void {
    console.log(this.formGroup.value);

    //

    this.RegisterService.createTeam(this.formGroup.value).subscribe(response => {
      console.log(response);
    });
  }

}
