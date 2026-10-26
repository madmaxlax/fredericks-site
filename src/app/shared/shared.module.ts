import { NgModule } from '@angular/core';
import { RevealDirective } from './reveal.directive';

@NgModule({
  declarations: [RevealDirective],
  exports: [RevealDirective],
})
export class SharedModule {}
