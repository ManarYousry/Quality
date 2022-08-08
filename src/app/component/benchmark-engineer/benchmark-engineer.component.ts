import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-benchmark-engineer',
  templateUrl: './benchmark-engineer.component.html',
  styleUrls: ['./benchmark-engineer.component.css']
})
export class BenchmarkEngineerComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle("Quality Management :: BenchMark Engineer"); 
  }

  ngOnInit(): void {
  }

}
