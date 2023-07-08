import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username = 'kminchelle';
  public password = '0lelplR';

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    console.log(this.loginService.token);
  }

  public onSubmit() {
    const obj = {
      username: this.username,
      password: this.password
    };
    this.login(obj);
  }

  private login(obj: any) {
    this.loginService.login(obj).subscribe(data => {
      console.log(data);
      console.log(this.loginService.token);
    });
  }
}
