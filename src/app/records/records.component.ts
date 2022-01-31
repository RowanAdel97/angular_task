import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from "@angular/material/dialog";
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: string[] = [];

  constructor(
    private recordsService: RecordsService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  getRecords(): void {
    this.recordsService.getRecords()
    .subscribe(records => this.records = records['data']);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {if(result == "true") this.getRecords()})
  }
}
