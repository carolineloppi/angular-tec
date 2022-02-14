import { Component } from '@angular/core';

@Component({
  selector: 'inline-component',
  template: `<p>
    Este HTML é inline. É boa prática manter este template com até 3 linhas.
  </p>`,
})
export class InlineTemplateComponent {}
