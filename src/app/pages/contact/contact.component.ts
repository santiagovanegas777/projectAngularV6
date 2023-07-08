import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  public message: string = "";
  public email: string = ""
  public phoneNumber: string = ""

  submitEnable: boolean = true;
  messageSent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  submitButtonActivator() {
    this.submitEnable = !this.submitEnable;
  }
  sendMessage() {
    console.log("mensaje enviado");

    this.phoneNumber = "";
    this.email = "";
    this.message = "";
    this.messageSent = true;
  }

}
