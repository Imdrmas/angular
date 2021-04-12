import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() description;
  @Input() price;

  constructor(
    public activeModal: NgbActiveModal,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  confirmar(id: string): void {
    this.paymentService.confirmar(id).subscribe(
      data => {
        this.toastrService.success
        ('page confirmation', 'payment has been confirmed with id ' + data[`id`],
        {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }
close() {
  this.activeModal.close();
}
  cancelar(id: string): void {
    this.paymentService.cancelar(id).subscribe(
      data => {
        this.toastrService.success
        ('page cancel', 'payment has been cancel with id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
       this.activeModal.close();
      }
    );
  }
}
