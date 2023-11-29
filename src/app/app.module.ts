import {
  TuiRootModule,
  TuiDialogModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GuruComponent } from './guru/guru.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiInputModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiRadioBlockModule,
} from '@taiga-ui/kit';
import { LessonComponent } from './lesson/lesson.component';
import { LessonItemComponent } from './lesson-item/lesson-item.component';
import { ResultComponent } from './result/result.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'guru', component: GuruComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GuruComponent,
    HomePageComponent,
    LessonComponent,
    LessonItemComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiIslandModule,
    LottieModule.forRoot({
      player: playerFactory,
    }),
    TuiRadioBlockModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
