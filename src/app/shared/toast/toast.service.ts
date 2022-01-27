import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable()
export class ToastService {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay, private injector: Injector) {
    this.overlayRef = overlay.create({
      positionStrategy: this.createPositionStrategy(),
      backdropClass: 'ABC',
      panelClass: 'CLASABC',
      hasBackdrop: true
    })
  }

  private createPositionStrategy() {
    return this.overlay.position()
      .global()
      .bottom()
      .right();
  }

  show(message: string) {
    console.log("Showing");

   const injector = Injector.create({
     providers: [
       { provide: OverlayRef, useValue: this.overlayRef },
     ],
     parent: this.injector,
   });

    const toastComponent = this.overlayRef.attach(new ComponentPortal(ToastComponent, null, injector));
    toastComponent.instance.message = message += 'ASDFSD';
    toastComponent.changeDetectorRef.detectChanges();
    return toastComponent;
  }
}
