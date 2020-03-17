import { Component, OnInit } from '@angular/core';
import geo from 'geojs/geo.js';

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.css']
})
export class ItemViewerComponent implements OnInit {
  itemViewerText = 'Gallery';
  serverApiURL = 'https://api.digitalslidearchive.org/api/v1/item/5b9ef9c8e62914002e94771e/tiles/zxy/{z}/{x}/{y}?edge=crop';
  annotation = 'https://github.com/oziomek1 @ 2020';

  constructor() { }

  ngOnInit(): void {
    let map = geo.map({
      autoResize: false,
      discreteZoom: false,
      clampBoundsX: false,
      clampBoundsY: false,
      center: {x: -50, y: 0},
      node: '#item',
      zoom: 0,
    });

    map.createLayer(
      'osm', // OpenStreetMap
      {
        attribution: this.annotation,
        minLevel: 2,
        renderer: 'canvas',
        tileWidth: 240,
        tileHeight: 240,
        topDown: false,
        url: this.serverApiURL,
        wrapX: false,
        wrapY: false,
      }
    );
  }

}
