import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'train', component: TrainComponent },
  { path: 'home', component: MainComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
