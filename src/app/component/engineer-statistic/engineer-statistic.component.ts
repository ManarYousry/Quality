import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddnewEngineerComponent } from 'src/app/Forms/addnew-engineer/addnew-engineer.component';

@Component({
  selector: 'app-engineer-statistic',
  templateUrl: './engineer-statistic.component.html',
  styleUrls: ['./engineer-statistic.component.css']
})
export class EngineerStatisticComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Per Shift', 'Per Engineer', 'Per Team','Random'];
  filteredOptions!: Observable<string[]>;


  constructor(private _bottomSheet: MatBottomSheet, private title :Title) { 
    this.title.setTitle("Quality Management :: Engineer Statistics")
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  onCreate(){
    //this.service.initializeFormGroup();
    const dialogGonfig = new MatDialogConfig();
    dialogGonfig.disableClose=true;
    dialogGonfig.autoFocus= true;
    dialogGonfig.width="50%";
    dialogGonfig.panelClass='modals-dialog';
    this._bottomSheet.open(AddnewEngineerComponent);
  
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
