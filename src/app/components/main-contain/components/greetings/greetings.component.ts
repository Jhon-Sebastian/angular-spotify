import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'Greeting',
  standalone: true,
  imports: [],
  template: ` <h1 class="text-3xl font-bold">{{ greeting() }}</h1> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingsComponent implements OnInit {
  greeting = signal('');

  ngOnInit(): void {
    this.calculateTheGreetingsToShow();
  }

  calculateTheGreetingsToShow() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();

    let calculatedGreeting = '';

    if (currentHours < 12) {
      calculatedGreeting = 'Buenos dias';
    } else if (currentHours < 18) {
      calculatedGreeting = 'Buenas tardes';
    } else {
      calculatedGreeting = 'Buenas noches';
    }

    this.greeting.set(calculatedGreeting);
  }
}
