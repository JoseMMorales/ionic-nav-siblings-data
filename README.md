![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Ionic](https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white) ![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

## Ion-nav-project

[ion-nav](https://ionicframework.com/docs/api/nav) is a standalone component for loading arbitrary components and pushing new components on to the stack. It's not tied to a particular router, so this means that if we load a Nav component, and push other components to the stack, they will not affect the app's overall router. That's what this project has been about, avoiding [Angular Router](https://angular.io/api/router) with interactions done via [NavLink](https://ionicframework.com/docs/api/nav-link) as a simplified API, and creating additional components which have been customized to pass data between multiple [reactive forms](https://angular.io/guide/reactive-forms) when the user is moving forward though the application.

### Customizing ionic components

- <b>ion-nav-link component</b> which has been wrapped up with a dynamic div to make it not clickable for the user while form is not active. This component is re-used in each form to make the magic happens when user wants to go forward in the App.
  <img width="75%" alt="Capture" src="https://user-images.githubusercontent.com/43299285/210065974-28698840-ef40-4778-8ef4-384ce10ee12e.PNG">

- <b>ion-modal component</b> where final form is rendered with data set in all views by the user. This is just in use in a specific component(email component) so methods and data are linked using `Input()`, `Output()` Decorators for transferring/detect data changing and modify the DOM.
  <img width="75%" alt="Capture" src="https://user-images.githubusercontent.com/43299285/210067431-9b8bc3f5-be68-4ff7-8c67-46a6d3c1519f.PNG">

### Sharing Data between siblings

Data service where a Subject([BehaviorSubject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject)) is set with registering values when user submit a form in each view of the App. Then, the data is stored asObservable in a global variable, being able to get back those values from any level needed.

<div align="center">
  <img width="489" alt="Capture" src="https://user-images.githubusercontent.com/43299285/210065226-8d6c3e9a-29b1-44f5-8831-61f92337c1a4.PNG">
</div>

### Technology

<b>@angular/cli</b>: "15.0.0"</br>
<b>rxjs</b>: "7.5.0"</br>
<b>typescript</b>: "4.8.4"</br>
<b>@ionic/angular</b>: "6.1.9"</br>
<b>@capacitor/cli</b>: "4.6.1"

### Author

JoseMMorales
