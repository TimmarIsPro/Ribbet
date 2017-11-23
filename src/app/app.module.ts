import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { TheTimeComponent } from './the-time/the-time.component';
import { FormComponent } from './form/form.component';
import { SortbuttonsComponent } from './sortbuttons/sortbuttons.component';

// import {AngularFireModule } from 'angularfire2';
// import {AngularFireDatabaseModule } from 'angularfire2/database';

// import {environment} from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    TheTimeComponent,
    FormComponent,
    SortbuttonsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
