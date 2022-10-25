import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./game.component";
import { HighscoresComponent } from "./highscores.component";
import { LoginComponent } from "./login/login.component";
import { PlayGameComponent } from "./playgame.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./security/auth.guard";

import { WelcomeComponent } from "./welcome.component";


const routes: Routes = [
    { path: "", component: WelcomeComponent, pathMatch: "full"},
    { path: "playgame", component: PlayGameComponent, canActivate: [AuthGuard], data: {claimType: "CanAccessExp"} },
    { path: "game", component: GameComponent, canActivate: [AuthGuard], data: {claimType: "CanAccessExp"} },
    { path: "highscores", component: HighscoresComponent },
    { path: "login", component: LoginComponent
    , canActivate: [AuthGuard], data: {claimType: "isAuthenticated"}
    },
    { path: "register", component: RegisterComponent
    , canActivate: [AuthGuard], data: {claimType: "isAuthenticated"} 
  }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule{}