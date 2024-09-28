import { Component } from '@angular/core';

@Component({
  selector: 'PlayIcon',
  standalone: true,
  template: `
    <svg
      role="img"
      height="16"
      width="16"
      aria-hidden="true"
      viewBox="0 0 16 16"
    >
      <path
        d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
      ></path>
    </svg>
  `,
})
export class PlaySvgComponent {}