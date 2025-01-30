import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component'
import { ReportsComponent } from '@org/reports';
import { SharedComponent } from '@org/shared';

@Component({
  imports: [
    NxWelcomeComponent, 
    RouterModule, 
    ReportsComponent, 
    SharedComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reports-fe';
}
