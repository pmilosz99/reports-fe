import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import TileLayer from 'ol/layer/Tile';
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'lib-map',
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  public map!: Map

  ngOnInit(): void {
    this.map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({ 
      center: [0, 0],
      zoom: 2,
      maxZoom: 18, 
    }),
    target: 'map',
  });
 }
}
