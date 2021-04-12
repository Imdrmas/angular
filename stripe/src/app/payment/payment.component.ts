import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { StripeService } from 'ngx-stripe';
import { PaymentIntentDto } from '../model/PaymentIntentDto';
import { PaymentService } from './payment.service';
import { Router } from '@angular/router';
import { StripeElementsOptions, StripeElements } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  error: any;
  @Input() price: any;
  @Input() description: any;
  @Input() name: any;

  elements: StripeElements;
  card: any;

  elementsOptions: StripeElementsOptions = {
    locale: 'fr'
  };

  constructor(
    public modalService: NgbModal,
    private stripeService: StripeService,
    private paymentService: PaymentService,
    private router: Router
    ) { }

    public stripeForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

  ngOnInit() {
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                lineHeight: '1.700'
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy() {
    const name = this.stripeForm.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          const paymentIntentDto: PaymentIntentDto = {
            token: result.token.id,
            amount: this.price + 50,
            currency: 'EUR',
            description: this.description
          };
          this.paymentService.paymentintent(paymentIntentDto).subscribe(
            data => {
              console.log(result.token.card.last4);
              this.abrirModal(data[`id`], this.name, data[`description`], data[`amount`]);
              this.router.navigate(['/']);
            }
          );
          this.error = undefined;
        } else if (result.error) {
          this.error = result.error.message;
        }
      });


  }

  correctErrpr() {
    this.error = undefined;
  }

  abrirModal(id: string, name: string, description: string, price: number) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.price = price;
  }
}
