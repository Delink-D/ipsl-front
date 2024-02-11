import { NgModule } from '@angular/core';
import { SafeURLPipe } from './safeUrl.pipe';

@NgModule({
  declarations: [SafeURLPipe],
  exports: [SafeURLPipe]
})
export class PipesModule { }
