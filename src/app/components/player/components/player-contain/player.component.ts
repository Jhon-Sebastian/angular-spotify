import { PlayerStoreService } from '@/app/components/main-contain/services/player-store.service';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  effect,
  ViewChild,
} from '@angular/core';
import { PauseySvgComponent } from '@icons/pause.svg.component';
import { PlaySvgComponent } from '@icons/play.svg.component';

@Component({
  selector: 'Player',
  standalone: true,
  imports: [PauseySvgComponent, PlaySvgComponent],
  templateUrl: './player.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  @ViewChild('audioRef') audioRef!: ElementRef;

  private readonly _playerStoreService = inject(PlayerStoreService);
  isPlaying = this._playerStoreService.getIsPlaying;
  currentMusic = this._playerStoreService.getCurrentMusic;

  currentMusicEffect = effect(() => {
    if (!this.isPlaying()) {
      this.audioRef.nativeElement.pause();
      return;
    }

    const { playlist, song, songs } = this.currentMusic();
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      this.audioRef.nativeElement.src = src;
      this.audioRef.nativeElement.play();
    }
  });

  changeStatePlayer() {
    //this.audioRef.nativeElement.src = '/music/1/02.mp3';
    this._playerStoreService.setIsPlaying(!this.isPlaying());

    if (this.isPlaying()) {
      this.audioRef.nativeElement.play();
    } else {
      this.audioRef.nativeElement.pause();
      // this.audioRef.nativeElement.volume = 0.1;
    }
  }
}
