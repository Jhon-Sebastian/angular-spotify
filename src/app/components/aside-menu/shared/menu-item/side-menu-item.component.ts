import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'SideMenuItem',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li>
      <a
        class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
        [routerLink]="'/' + href()"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `,
})
export class SideMenuItemComponent {
  href = input.required<string>();
}
