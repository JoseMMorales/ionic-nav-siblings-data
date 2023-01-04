import { Injectable, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { from, Observable, Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IonLoaderService implements OnDestroy {
  loaderObservable$!: Observable<HTMLIonLoadingElement>;
  subscription: Subscription[] = [];

  constructor(public loadingController: LoadingController) {}

  ngOnDestroy(): void {
    this.subscription.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  presentLoader(): void {
    this.getLoader();

    this.subscription.push(
      this.loaderObservable$
        .pipe(take(1))
        .subscribe((load: HTMLIonLoadingElement) => {
          load.present();
        })
    );
  }

  dismissLoader(): void {
    this.subscription.push(
      this.loaderObservable$
        .pipe(take(1))
        .subscribe((load: HTMLIonLoadingElement) => {
          load.dismiss();
        })
    );
  }

  private getLoader(): void {
    this.loaderObservable$ = from(
      this.loadingController.create({ message: 'Loading...' })
    );
  }
}
