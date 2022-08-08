import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-banchmark-teamhistory-report',
  templateUrl: './banchmark-teamhistory-report.component.html',
  styleUrls: ['./banchmark-teamhistory-report.component.css']
})
export class BanchmarkTeamhistoryReportComponent implements OnInit {

  toppings=new FormControl();
  toppingList: string[] = ['Team Logs', 'Team Benchmarks'];
  constructor(private title :Title) {
    this.title.setTitle("Benchmark Team History Report")
   }
 
 
  ngOnInit(): void {
  }

}
