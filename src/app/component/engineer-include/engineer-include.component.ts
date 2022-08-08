import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { UpdateShiftComponent } from 'src/app/Forms/update-shift/update-shift.component';
import { NotificationService } from 'src/app/shared/service/notification.service';

export interface PeriodicElement {
  ActiveDate: string;
 Name:string;
  Agents: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"},
  {ActiveDate: "odkod", Name: 'Hydrogen', Agents: "1.0079"}
 
 
];

@Component({
  selector: 'app-engineer-include',
  templateUrl: './engineer-include.component.html',
  styleUrls: ['./engineer-include.component.css']
})
export class EngineerIncludeComponent implements OnInit {

  searchKey:string ='' ;
  constructor(private titleService:Title, public notificationService: NotificationService, private _bottomSheet: MatBottomSheet ){
    //  this.searchKey='';
    this.titleService.setTitle("Quality Management | Engineer Include"); 
    
  }
 
  
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['ActiveDate','Name', 'Agents', 'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(){
   
  }

  ngAfterViewInit() { 
  
    this.dataSource.sort = this.sort as MatSort;
    this.dataSource.paginator = this.paginator as MatPaginator;}

    onSearchClear(){
      this.searchKey ='';
      this.applyFilter();
    }
    applyFilter(){
      this.dataSource.filter=this.searchKey.trim().toLowerCase();
    }
    onCreate(){
      //this.service.initializeFormGroup();
      const dialogGonfig = new MatDialogConfig();
      dialogGonfig.disableClose=true;
      dialogGonfig.autoFocus= true;
      dialogGonfig.width="50%";
      dialogGonfig.panelClass='modals-dialog';
    
      this._bottomSheet.open(UpdateShiftComponent);
    
    }

}
