import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-team-report',
  templateUrl: './detailed-team-report.component.html',
  styleUrls: ['./detailed-team-report.component.css']
})
export class DetailedTeamReportComponent implements OnInit {
  toppings=new FormControl();
  toppingList: string[] = ['Number of Error free Calls', 'Number of non fatal in fail call only', 'Top 5 error', 'Percentage of Non-fatal And Fatal Errors For Team members', 'Error occurrence per factors'];

  constructor(private title :Title) {
    this.title.setTitle("Detailed Team Report")
   }
  ngOnInit(): void {
  }

}
