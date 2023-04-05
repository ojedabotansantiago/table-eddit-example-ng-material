import { Component, EventEmitter, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  isEditable: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    isEditable: false,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    isEditable: true,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    isEditable: false,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    isEditable: false,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    isEditable: false,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    isEditable: true,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    isEditable: false,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    isEditable: false,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    isEditable: false,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    isEditable: false,
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnChanges {
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;


  @Output() eventRowEdited = new EventEmitter<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.table.renderRows();

  }
  onEdit(event: any, element: any) {
    const positions = parseInt(element?.position) - 1;
    if (Number.isInteger(positions)) {
      const valueEdited = event?.target?.textContent.trim();
      this.dataSource[positions].name = valueEdited;
    };
    console.warn('hola Sergio');
    this.table.renderRows();
    this.eventRowEdited.emit(this.dataSource[positions]);
    console.info(event);
    console.info(event?.target?.textContent.trim());
    console.info('la tabla con el valor editado es:');
    console.table(this.dataSource);
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
