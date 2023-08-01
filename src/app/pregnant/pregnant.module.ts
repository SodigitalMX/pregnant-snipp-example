import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuestionaryComponent } from './cuestionary/cuestionary.component';
import { PregnantService } from './services/pregnant.service';



@NgModule({
  declarations: [
    CuestionaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CuestionaryComponent
  ],
  providers:[
    PregnantService
  ]
})
export class CuestionaryModule { }
