import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-objects',
  template: `
    <div class="absolute top-0 left-0 right-0 opacity-25">
      <div
        class="absolute left-16 mix-blend-multiply w-[700px] h-[900px] rounded-[40rem] float-obj"
      ></div>
      <div
        class="absolute top-28 left-1/2 mix-blend-multiply w-[600px] h-[600px] rounded-[40rem] float-obj"
        style="
          --float-obj-animation: traverse-up-right;
          --float-obj-animation-duration: 13s;
          --float-obj-color: rgb(45, 212, 191);
        "
      ></div>
    </div>
  `,
  styles: []
})
export class FloatingObjectsComponent {}
