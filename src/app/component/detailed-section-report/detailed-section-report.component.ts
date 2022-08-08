import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-section-report',
  templateUrl: './detailed-section-report.component.html',
  styleUrls: ['./detailed-section-report.component.css']
})
export class DetailedSectionReportComponent implements OnInit {

  toppings=new FormControl();
  toppingList: string[] = ['Number of Error free Calls', 'Number of non fatal in fail call only', 'Top 5 error', 'Percentage of Non-fatal And Fatal Errors For Team members', 'Error occurrence per factors'];

  constructor(private title :Title) {
    this.title.setTitle("Detailed Section Report")
   }

  ngOnInit(): void {
  }

}
