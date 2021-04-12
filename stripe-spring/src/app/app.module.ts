import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { DetailsArticleComponent } from './article/details-article/details-article.component';
import { MenuComponent } from './menu/menu.component';
import { ModelComponent } from './model/model.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListArticleComponent,
    DetailsArticleComponent,
    MenuComponent,
    ModelComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  entryComponents: [ModelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
