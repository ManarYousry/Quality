import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-engineer-report',
  templateUrl: './detailed-engineer-report.component.html',
  styleUrls: ['./detailed-engineer-report.component.css']
})
export class DetailedEngineerReportComponent implements OnInit {

  toppings=new FormControl();
  toppingList: string[] = ['Number of Error free Calls', 'Number of non fatal in fail call only', 'Top 5 error'];

  constructor(private title :Title) {
    this.title.setTitle("Detailed Engineer Report")
   }

  ngOnInit(): void {
  }

}
