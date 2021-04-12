import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsArticleComponent } from './article/details-article/details-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ModalComponent } from './modal/modal.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    MenuComponent,
    DetailsArticleComponent,
    ListArticleComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule, NgbAlertModule,
    ToastrModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51IV4l4Kcemy9DHhZ8r60PcIugmW2VoJrk4gJynek43RSCcYQ7k8DreucyJCoeuzpZ8Ycw0QQAdkeapr5lD0L87SM005a381ivE'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
