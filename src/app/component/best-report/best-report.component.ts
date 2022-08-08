import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-best-report',
  templateUrl: './best-report.component.html',
  styleUrls: ['./best-report.component.css']
})

export class BestReportComponent implements OnInit {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  fruits = [
    'Lemon',
  ];

  allFruits = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry'
  ];

  @ViewChild('fruitInput') fruitInput!: ElementRef;

  constructor(private title :Title) {
    this.title.setTitle("Quality Management :: Best Report")
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
  }
  ngOnInit(): void {
  
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allFruits.filter(fruit =>
        fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

}
