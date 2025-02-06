import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout';

@Component({
  imports: [
    RouterModule, 
    DefaultLayoutComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reports-fe';
}
