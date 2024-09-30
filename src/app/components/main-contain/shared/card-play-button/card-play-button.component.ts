import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { PlaySvgComponent } from '@icons/play.svg.component';
import { PlayerStoreService } from '../../services/player-store.service';
import { PauseySvgComponent } from '@icons/pause.svg.component';
import { ApiGetInfoPlaylistService } from '../../services/api-getinfo-playlist.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'CardPlayButton',
  standalone: true,
  imports: [PlaySvgComponent, PauseySvgComponent],
  template: `
    <div
      class="flex justify-center items-center bg-green-500 text-black p-4 rounded-full cursor-pointer"
      (click)="changeStatePlayer()"
    >
      @if (this.isPlayingCurrentMusic()) {
        <PauseIcon />
      } @else {
        <PlayIcon />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlayButtonComponent {
  id = input.required<string>();

  private readonly _playerStoreService = inject(PlayerStoreService);
  private readonly _apiPlaylistService = inject(ApiGetInfoPlaylistService);
  isPlaying = this._playerStoreService.getIsPlaying;
  currentMusic = this._playerStoreService.getCurrentMusic;

  async changeStatePlayer(): Promise<void> {
    if (this.isCurrentMusic()) {
      this._playerStoreService.setIsPlaying(!this.isPlaying());
    } else {
      this._playerStoreService.setIsPlaying(true);
    }

    const detail = await lastValueFrom(
      this._apiPlaylistService.getDetailPlaylist(this.id()),
    );
    if (detail) {
      this._playerStoreService.setCurrentMusic({
        playlist: detail.playlist,
        songs: detail.songs,
        song: detail.songs[0],
      });
    }
  }

  isCurrentMusic(): boolean {
    return this.currentMusic().playlist?.id === this.id();
  }

  isPlayingCurrentMusic() {
    return this.isPlaying() && this.isCurrentMusic();
  }
}
