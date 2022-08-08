import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddnewEngineerComponent } from 'src/app/Forms/addnew-engineer/addnew-engineer.component';

@Component({
  selector: 'app-distribute-evaluator',
  templateUrl: './distribute-evaluator.component.html',
  styleUrls: ['./distribute-evaluator.component.css']
})
export class DistributeEvaluatorComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Per Shift', 'Per Engineer', 'Per Team','Random'];
  filteredOptions!: Observable<string[]>;

  
  constructor(private title : Title,private _bottomSheet: MatBottomSheet){
    this.title.setTitle("Quality Management :: Distribute Evaluator")
  }
  
  
    ngOnInit(){
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
   

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    // form: FormGroup = new FormGroup({
    //   $key: new FormControl(null),
    //   SampleSizeForEachteam: new FormControl('', Validators.required),
    //   Month: new FormControl(''),
    //   select:new FormControl('')
     
     
    // });
   
  
  
  
   
    onClear(){
      // this.service.form.reset();
      // this.service.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
    }
    onSubmit(){
      // if(this.service.form.valid){
       
      //   this.service.form.reset();
      // this.service.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
      
  
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
    
    
    

}
