import { Component } from '@angular/core';
import { UpdateService } from './core/services/update.service';
import { ToastService } from './shared/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angularpwa';

  constructor(private updateService: UpdateService, private toastService: ToastService ) {
    this.updateService.availableUpdate.subscribe((version) => {
      console.log(version);
    });

    setTimeout(() => {
      this.toastService.show('');
    }, 2000)
  }

}
