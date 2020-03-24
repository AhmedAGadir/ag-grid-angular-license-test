import { Component, OnInit } from '@angular/core';

import 'ag-grid-enterprise';
import { LicenseManager } from 'ag-grid-enterprise';
import { LICENSE_KEY } from './license-key.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  columnDefs = [
    { headerName: 'Make', field: 'make', rowGroup: true },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  ngOnInit() {
    LicenseManager.setLicenseKey(LICENSE_KEY);
  }
}