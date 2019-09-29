import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'group-by-alphabetes',
  templateUrl: './ngx-group-by-alphabetes.component.html',
  styleUrls: ['./ngx-group-by-alphabetes.component.css']
})
export class GroupByAlphabetesComponent implements OnInit {

  @Input() input: any[];
  @Input() sortKey: any;
  @Output() itemClick = new EventEmitter<any>();
  @Output() headerClick = new EventEmitter<any>();

  output: any[];

  constructor() { }

  ngOnInit() {
    if (this.sortKey === null || this.sortKey === undefined) {
      this.sortKey = '';
    }

    this.groupByAlphabates();
  }

  groupByAlphabates() {
    const sorted = this.input.sort((ele1: any, ele2: any) => {
      if (this.sortKey === '') {
        return ele1 > ele2 ? 1 : -1;
      } else {
        return ele1[this.sortKey] > ele2[this.sortKey] ? 1 : -1;
      }
    });

    const grouped = sorted.reduce((groups, ele: any) => {
      let letter;
      if (this.sortKey === '') {
        letter = ele.charAt(0).toUpperCase();
      } else {
        letter = ele[this.sortKey].charAt(0).toUpperCase();
      }

      groups[letter] = groups[letter] || [];
      groups[letter].push(ele);
      return groups;
    }, {});

    this.output = Object.keys(grouped).map(key => ({key, value: grouped[key]}));
  }

  onItemClick(ele) {
    this.itemClick.next(ele);
  }

  onHeaderClick(header) {
    this.headerClick.next(header);
  }

}
