import { Component } from '@angular/core';

@Component({
  selector: 'app-send-icon',
  standalone: true,
  imports: [],
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14"
        stroke="#393e46"
        stroke-width="1.5" 
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
})
export class SendIconComponent {

}
