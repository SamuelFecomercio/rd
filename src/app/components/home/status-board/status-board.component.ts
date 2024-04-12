import { Component, Input, Inject } from '@angular/core';
import { StatusCardComponent } from '../status-card/status-card.component';
import { StatusCardCartaoComponent } from './../status-card-cartao/status-card-cartao.component';

//modal
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//components
import { DialogComponentComponent } from '../../dialog-component/dialog-component.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-status-board',
  standalone: true,
  imports: [
    StatusCardComponent,
    StatusCardCartaoComponent,

  ],
  templateUrl: './status-board.component.html',
  styleUrl: './status-board.component.css'
})

export class StatusBoardComponent {
  @Input() content: string = ''
  @Input() statusCards: any[] = [];


  constructor(public dialog: MatDialog) { }
  nome: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '600px',
      data: { name: this.nome }
    });

  }
}
