import {Component, ViewChild , OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DeleteService } from 'src/app/shared/service/delete.service';
import { UpdateArchiveComponent } from 'src/app/Forms/update-archive/update-archive.component';

export interface PeriodicElement {
  Date: string;
  DocName: string;
  ReferenceTeam: string;
  Document:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'},
  {Date: "1",  DocName: 'Hydrogen', ReferenceTeam: "1.0079",   Document: 'H'}

];

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  searchKey:string ='' ;
  constructor(private dialog: MatDialog,private titleService:Title,private dialogService: DeleteService, public notificationService: NotificationService, private _bottomSheet: MatBottomSheet ){
    //  this.searchKey='';
    this.titleService.setTitle("Quality Management :: Archive"); 
    
  }
 
  
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['Date','DocName', 'ReferenceTeam', 'Document', 'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // searchKey!:string;

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
    //  this.dialog.open(EmpformComponent,dialogGonfig);
    this._bottomSheet.open(UpdateArchiveComponent);
    }

    onEdit(){
      //this.service.initializeFormGroup();
      const dialogGonfig = new MatDialogConfig();
      dialogGonfig.disableClose=true;
      dialogGonfig.autoFocus= true;
      dialogGonfig.width="50%";
      dialogGonfig.panelClass='modals-dialog';
      //this.dialog.open(EmpformComponent,dialogGonfig);
      this._bottomSheet.open(UpdateArchiveComponent);

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
