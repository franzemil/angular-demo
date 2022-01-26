import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';
import { LogoComponent } from './logo/logo.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    BadgeComponent,
    LogoComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    BadgeComponent,
    LogoComponent,
    CardComponent
  ]
})
export class SharedModule { }
