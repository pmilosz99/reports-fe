import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '@org/shared/ui/map';

@Component({
  selector: 'app-default-layout',
  imports: [CommonModule, MapComponent],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css',
})
export class DefaultLayoutComponent {}
