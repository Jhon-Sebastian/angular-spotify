import { Injectable, signal, WritableSignal } from '@angular/core';
import { Playlist, Song } from '@lib/data';

type CurrenMusic = {
  playlist: Playlist | null;
  song: Song | null;
  songs: Song[] | [];
};

@Injectable({ providedIn: 'root' })
export class PlayerStoreService {
  private readonly _isPlaying = signal(false);
  private readonly _currenMusic = signal<CurrenMusic>({
    playlist: null,
    song: null,
    songs: [],
  });

  get getIsPlaying(): WritableSignal<boolean> {
    return this._isPlaying;
  }

  get getCurrentMusic(): WritableSignal<CurrenMusic> {
    return this._currenMusic;
  }

  setIsPlaying(newState: boolean): void {
    this._isPlaying.set(newState);
  }

  setCurrentMusic(newMusic: CurrenMusic | any): void {
    this._currenMusic.set(newMusic);
  }
}
