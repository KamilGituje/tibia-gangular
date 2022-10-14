import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { PlayGameComponent } from './playgame.component';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';
import { SelectCharacterComponent } from './select-character.component';
import { GameComponent } from './game.component';
import { ExpComponent } from './exp.component';
import { BackpackComponent } from './backpack.component';
import { HighscoresComponent } from './highscores.component';
import { WelcomeComponent } from './welcome.component';
import { SellItemComponent } from './sellitem.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './security/jwt-interceptor';
import { AuthGuard } from './security/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayGameComponent,
    CreateCharacterComponent,
    SelectCharacterComponent,
    GameComponent,
    ExpComponent,
    BackpackComponent,
    HighscoresComponent,
    SellItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
