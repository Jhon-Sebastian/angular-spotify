import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Playlist } from '@lib/data';
import { RouterLink } from '@angular/router';
import { AsideMenuService } from '@aside-menu/aside-menu.service';

@Component({
  selector: 'SideMenuCard',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if(playList()){
    <a
      [routerLink]="'/playlist/' + playList().id"
      class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"
    >
      <picture class="h-12 w-12 flex-none">
        <img
          [src]="playList().cover"
          [alt]="'Cover of' + playList().title + ' by ' + getArtists()"
          class="object-cover w-full h-full rounded-md"
        />
      </picture>
      <div class="flex flex-col flex-auto truncate">
        <h4 class="text-white text-sm">{{ playList().title }}</h4>
        <span class="text-gray-400 text-xs"> {{ getArtists() }} </span>
      </div>
    </a>
    }
  `,
})
export class SideMenuCardComponent {
  private _asideMenuService = inject(AsideMenuService);
  playList = input.required<Playlist>();

  getArtists() {
    return this._asideMenuService.joinAllArtists(
      this.playList().artists
    );
  }
}
