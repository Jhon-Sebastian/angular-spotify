import { Injectable, signal } from '@angular/core';
import { allPlaylists, Playlist, playlists, Song, songs } from '@lib/data';

@Injectable({
  providedIn: 'root',
})
export class AsideMenuService {
  private readonly _listPlayList = signal(playlists);
  private readonly _getAllPlayList = signal(allPlaylists);
  private readonly _allSongs = signal(songs);

  get getNormalList(): Playlist[] {
    return this._listPlayList();
  }

  get getAllPlayList(): Playlist[] {
    return this._getAllPlayList();
  }

  get getSongs(): Song[] {
    return this._allSongs();
  }

  getPlayListById(id: string): Playlist | undefined {
    return this._getAllPlayList().find((l) => l.id === id);
  }

  getListSongsByPlayListId(albumIdPlayList: number): Song[] {
    return this._allSongs().filter((s) => s.albumId === albumIdPlayList);
  }

  joinAllArtists(artists: string[]): string {
    return artists.join(', ');
  }
}
