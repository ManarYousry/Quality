import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle("Quality Management :: BenchMark"); 
  }

  ngOnInit(): void {
  }

}
