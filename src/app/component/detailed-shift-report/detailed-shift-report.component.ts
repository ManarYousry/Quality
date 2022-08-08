import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-shift-report',
  templateUrl: './detailed-shift-report.component.html',
  styleUrls: ['./detailed-shift-report.component.css']
})
export class DetailedShiftReportComponent implements OnInit {

  toppings=new FormControl();
  toppingList: string[] = ['Number of Error free Calls', 'Number of non fatal in fail call only', 'Top 5 error', 'Percentage of Non-fatal And Fatal Errors For Team members', 'Error occurrence per factors'];

  constructor(private title :Title) {
    this.title.setTitle("Detailed Shift Report")
   }

  ngOnInit(): void {
  }

}
