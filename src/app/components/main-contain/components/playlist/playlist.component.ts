import { AsideMenuService } from '@/app/components/aside-menu/service/aside-menu.service';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Playlist, Song } from '@lib/data';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent implements OnInit {
  playlist = input.required<Playlist>();

  songs = signal<Song[]>([]);

  _asideMenuService = inject(AsideMenuService);

  ngOnInit(): void {
    this.getAllSongs();
  }

  getAllSongs(): void {
    const songs = this._asideMenuService.getListSongsByPlayListId(
      this.playlist().albumId,
    );
    this.songs.set(songs);
  }

  getArtistsList(): string {
    return this._asideMenuService.joinAllArtists(this.playlist().artists)
  }


}
