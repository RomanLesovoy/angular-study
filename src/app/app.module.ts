import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    SidebarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
