import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  paymentHandler:any = null;

  constructor() { }

  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IV4l4Kcemy9DHhZ8r60PcIugmW2VoJrk4gJynek43RSCcYQ7k8DreucyJCoeuzpZ8Ycw0QQAdkeapr5lD0L87SM005a381ivE',
      locale: 'auto',
      token: function (stripeToken: any) {
      //  console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100
    });
    console.log(paymentHandler);

  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51IV4l4Kcemy9DHhZ8r60PcIugmW2VoJrk4gJynek43RSCcYQ7k8DreucyJCoeuzpZ8Ycw0QQAdkeapr5lD0L87SM005a381ivE',
          locale: 'auto',
          token: function (stripeToken: any) {
          //  console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }

      window.document.body.appendChild(script);
    }
  }

}
