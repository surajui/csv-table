import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  totalamount: number;
  s: any;
  result: number;

  constructor() { }
@Input() tabledata:any;
private sum=0;  
private value; 
  ngOnInit() {
    console.log(this.tabledata);
  }
  onRowClick(event){
    this.result = 0;
      this.sum = 0;
      this.value= this.tabledata;
     for(let j=0;j<this.tabledata.length;j++){
      this.result = +this.value[j].Amount;
      this.sum += this.result;
      }
    }
  
}
