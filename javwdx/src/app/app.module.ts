import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup }from '@angular/forms';
import { CustomerMenuComponent} from './app.customercomponent';
import { CustomerFunctionComponent} from './app.CustomerFunctionComponent';
import {Routes,RouterModule} from '@angular/router';

const router:Routes=[
    {path:'cust',component:CustomerMenuComponent},
    {path:'custfun',component:CustomerFunctionComponent}
]

@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(router)
        
    ],
    declarations: [
        AppComponent,CustomerMenuComponent,CustomerFunctionComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }