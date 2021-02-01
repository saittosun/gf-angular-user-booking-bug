import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/base-components/loading-spinner/loading-spinner.component';
import { LocationPipe } from '../shared/pipes/location.pipe';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    LocationPipe,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    LoadingSpinnerComponent,
    LocationPipe,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
 ]
})
export class SharedModule { }
