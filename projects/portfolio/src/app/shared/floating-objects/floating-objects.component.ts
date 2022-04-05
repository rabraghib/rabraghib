import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-objects',
  template: `
    <div class="absolute top-0 left-0 right-0 opacity-25">
      <div
        class="absolute left-16 mix-blend-multiply w-[700px] h-[900px] rounded-[40rem] gradian float-obj"
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
  styles: [
    `
      .float-obj {
        --float-obj-animation: traverse-up-left;
        --float-obj-color: #4360b5;
        --float-obj-duration: 10s;
        background: radial-gradient(
          closest-side,
          var(--float-obj-color),
          #00000000
        );
        animation: var(--float-obj-animation) var(--float-obj-duration)
          ease-in-out infinite alternate;
        z-index: -1;
      }

      @keyframes traverse-up-left {
        0% {
        }

        100% {
          transform: translateY(-200px) translateX(-350px) rotate(180deg);
        }
      }

      @keyframes traverse-up-right {
        0% {
        }

        100% {
          transform: translateY(-300px) translateX(300px) rotate(360deg);
        }
      }
    `
  ]
})
export class FloatingObjectsComponent {}
