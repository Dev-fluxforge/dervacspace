import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { LandingPage } from './landing-page/landing-page';
import { SubscriptionListComponent } from './subscription-list/subscription-list';

const routes: Routes = [
  { path: '', component: LandingPage },
  // { path: 'subscriptions', component: SubscriptionList },
  { path: '**', redirectTo: '' }
];

// @NgModule({
//   declarations: [
//     App,
//     LandingPage,
//     SubscriptionList
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [],
//   bootstrap: [App]
// })
export class AppModule { }
