import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  @Input() registration: Registration;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log("Submitting registration");
    this.router.navigate(['/session', this.registration.idSession]);
  }
}
