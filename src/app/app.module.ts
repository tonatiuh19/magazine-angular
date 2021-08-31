import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainRowComponent } from './components/main-row/main-row.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { SecondaryRowComponent } from './components/secondary-row/secondary-row.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CategoryComponent } from './pages/category/category.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { ContentCardsComponent } from './components/content-cards/content-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MainRowComponent,
    CardPostComponent,
    SecondaryRowComponent,
    LoadingComponent,
    PrincipalComponent,
    CategoryComponent,
    TitleBarComponent,
    ContentCardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
