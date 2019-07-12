import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { AdminComponent } from './admin/admin.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { TestService } from './test.service'
@NgModule({
	declarations: [
		AppComponent,
		UserAddComponent,
		AdminComponent,
		AhorcadoComponent,
		UserEditComponent,
		UserGetComponent,
		
	],
	imports: [
		BrowserModule,
		FormsModule,
		SlimLoadingBarModule,
		ReactiveFormsModule,
		NgxIntlTelInputModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [TestService],
	bootstrap: [AppComponent]
})
export class AppModule { }
