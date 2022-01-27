import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass']
})
export class ToastComponent implements OnInit {

  @Input()
  message: string = ''

  constructor(private overlayRef: OverlayRef) {
    console.log(this.overlayRef);

  }

  ngOnInit(): void {
  }

  close() {
    this.overlayRef.dispose();
  }

}
