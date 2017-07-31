import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,  FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
  ],
  exports: [
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
