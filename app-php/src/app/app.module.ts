import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { CursoService } from './curso/curso.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpClientModule, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
