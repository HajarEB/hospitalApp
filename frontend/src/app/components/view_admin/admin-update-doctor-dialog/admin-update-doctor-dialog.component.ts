import { Component, inject, Inject, OnInit } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../../update-dialog/update-dialog.component';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-admin-update-doctor-dialog',
  imports: [MatDialogModule, UpdateDialogComponent],
  templateUrl: './admin-update-doctor-dialog.component.html',
  styleUrl: './admin-update-doctor-dialog.component.css'
})
export class AdminUpdateDoctorDialogComponent implements OnInit {

  configService = inject(ConfigService);
  id: number;
  title: string;
  getData_func_call: any;
  id_name:string;
  update_function = this.configService.update_doctor_status_expiry.bind(this.configService);
  fields = [
          { label: 'Status Expiry', name: 'status_expiry', type: 'date'},
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data.id;
    this.title = data.title;
    this.getData_func_call = data.getData_func_call;
    this.id_name = data.id_name;
  }
  ngOnInit(): void {
  }
}
