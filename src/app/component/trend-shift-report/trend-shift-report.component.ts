import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trend-shift-report',
  templateUrl: './trend-shift-report.component.html',
  styleUrls: ['./trend-shift-report.component.css']
})
export class TrendShiftReportComponent implements OnInit {

  toppings=new FormControl();
  criterias=new FormControl();
  criteriasList: string[] = ['Opening', 'Customer Data and Verification', 'Knowledge and troubleshooting Accuracy','LISTENING SKILLS','Speaking skills','Exhibts Responsiveness toward the customer','Closing','NOC OLA','Information logging','Customer Data and Verification(onsite)','logging information','Knowledge and troubleshooting Accuracy(onsite)','Opening(Mail)'];
  toppingList: string[] = ['Accuarcy Trend', 'Main Fatal and NonFatal Criteria', 'Summary Benchmark'];

  constructor(private title :Title) {
    this.title.setTitle("Trend Shift Report")
   }

  ngOnInit(): void {
  }

}
