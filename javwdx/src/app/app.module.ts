import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup }from '@angular/forms';
import { CustomerFunctions} from './app.customercomponent';

@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,CustomerFunctions
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }