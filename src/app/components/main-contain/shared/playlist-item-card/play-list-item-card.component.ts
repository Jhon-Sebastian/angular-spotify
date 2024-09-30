import { AsideMenuService } from '@/app/components/aside-menu/service/aside-menu.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '@lib/data';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';

@Component({
  selector: 'PlayListItemCard',
  standalone: true,
  imports: [RouterLink, CardPlayButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (playList()) {
      <article
        class="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 transition-all duration-300 rounded-md"
      >
        <div
          class="absolute right-4 bottom-20 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"
        >
          <CardPlayButton [id]="playList().id" />
        </div>
        <a
          [routerLink]="'/playlist/' + playList().id"
          class="playlist-item relative p-2 overflow-hidden gap-2 pb-6 w-44 flex-col flex "
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
      </article>
    }
  `,
})
export class PlayListItemCardComponent {
  private _asideMenuService = inject(AsideMenuService);
  playList = input.required<Playlist>();

  getArtists() {
    return this._asideMenuService.joinAllArtists(this.playList().artists);
  }
}
