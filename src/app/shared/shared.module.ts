import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';
import { LogoComponent } from './logo/logo.component';
import { CardComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ToastService } from './toast/toast.service';


@NgModule({
  declarations: [
    ButtonComponent,
    BadgeComponent,
    LogoComponent,
    CardComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [ToastService],
  exports: [
    ButtonComponent,
    BadgeComponent,
    LogoComponent,
    CardComponent
  ]
})
export class SharedModule { }
