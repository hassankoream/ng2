import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  userName: string = '';
  userAge: number | undefined;
  userEmail: string = ''
  userPassword: string = '';


  clearForm(): void {
    this.userName = '';
    this.userAge = undefined;
    this.userEmail = '';
    this.userPassword = '';
  }
}
