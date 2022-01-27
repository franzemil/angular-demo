import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { from, interval } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class UpdateService {
  constructor(private applicationRef: ApplicationRef, private swUpdate: SwUpdate) {
    const applicationStable = this.applicationRef.isStable
      .pipe(
        first(isStable => isStable),
        switchMap(() => interval(100000)),
        tap(() => console.log("Checking for an Update"))
      ).subscribe(() => {
        swUpdate.checkForUpdate();
      });
  }

  activateUpdate = () => from(this.swUpdate.activateUpdate());

  availableUpdate = this.swUpdate.versionUpdates;

}
