import { Injectable } from '@angular/core';
import { allPlaylists, Playlist, Song, songs } from '@lib/data';
import { Observable, of } from 'rxjs';

type DetailPlaylist = {
  playlist: Playlist;
  songs: Song[];
};

@Injectable({ providedIn: 'root' })
export class ApiGetInfoPlaylistService {

  getDetailPlaylist(id: string): Observable<DetailPlaylist> {
    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const allSongs = songs.filter((song) => song.albumId === playlist?.albumId);
    if (playlist && allSongs) {
      const detail: DetailPlaylist = {
        playlist,
        songs: allSongs,
      };
      return of(detail);
    }

    return of();
  }

}
