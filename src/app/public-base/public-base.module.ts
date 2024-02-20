import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicBaseRoutingModule } from './public-base-routing.module';
import { PublicBaseComponent } from './public-base.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicBaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicBaseRoutingModule,
    LoginModule
  ]
})
export class PublicBaseModule { }
