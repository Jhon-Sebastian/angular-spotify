import { AsideMenuService } from '@/app/components/aside-menu/service/aside-menu.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '@lib/data';

@Component({
  selector: 'PlayListItemCard',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (playList()) {
      <a
        [routerLink]="'/playlist/' + playList().id"
        class="playlist-item relative p-2 overflow-hidden gap-2 pb-6 rounded-md hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col flex transition-all duration-300"
      >
        <picture class="aspect-square w-full h-auto flex-none">
          <img
            [src]="playList().cover"
            [alt]="'Cover of' + playList().title + ' by '"
            class="object-cover w-full h-full rounded-md"
          />
        </picture>
        <div class="flex flex-col flex-auto px-2">
          <h4 class="text-white text-sm">{{ playList().title }}</h4>
          <span class="text-gray-400 text-xs"> {{ getArtists() }} </span>
        </div>
      </a>
    }
  `,
})
export class PlayListItemCardComponent {
  private _asideMenuService = inject(AsideMenuService);

  playList = input.required<Playlist>();

  getArtists() {
    return this._asideMenuService.joinAllArtists(
      this.playList().artists,
    );
  }
}
