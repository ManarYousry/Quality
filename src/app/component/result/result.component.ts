import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { DeleteService } from 'src/app/shared/service/delete.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

 
export interface PeriodicElement {
  CallDate: string;
  CustName:string;
  User:string;
  Serial: string;
  MonitorName:string;
  Status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'},
  { CallDate: 'oooo', CustName: 'Hydrogen',User:"user",  Serial: 'H',MonitorName: 'Hydrogen', Status: 'Hydrogen'}
];
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  searchKey:string ='' ;
  constructor(private title:Title,private dialogService: DeleteService, public notificationService: NotificationService ){
  
    this.title.setTitle("Quality Management :: Result")
    
  }
 
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['CallDate','CustName', 'User', 'Serial', 'MonitorName' , 'Status' ,'Action'];
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
    

   
    onDelete(){
     // this.dialogService.openConfirmDialog();
     this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      if (res) {
        // this.service.deleteDailyOperation(r.id).subscribe(
        //   rs => {
           this.notificationService.success(':: successfully Deleted');
        //     this.getRequestdata(1, 25, '', this.sortColumnDef, this.SortDirDef);
        //   },
        //   error => { this.notificationService.warn(':: An Error Occured') }
        // );
      }
    });
}

}
