import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() type: 'success';
  @Input() message: string;

  modal: BsModalRef;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    console.log(this.bsModalRef.content.type);
    this.bsModalRef.hide();
  }
}
