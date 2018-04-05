import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ShotComponent} from './components/shot/shot.component';
import {SixShotsComponent} from './components/six-shots/six-shots.component';
import {HttpClientModule} from '@angular/common/http';
import {RxPubSub} from 'rx-pubsub';
import {ApiService} from './services/api.service';
import {RoutingModule} from './modules/routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ShotComponent,
    SixShotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ApiService, RxPubSub],
  bootstrap: [AppComponent]
})
export class AppModule {
}
