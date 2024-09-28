import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { PauseySvgComponent } from '@icons/pause.svg.component';
import { PlaySvgComponent } from '@icons/play.svg.component';

@Component({
  selector: 'Player',
  standalone: true,
  imports: [PauseySvgComponent, PlaySvgComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements AfterViewInit {

  @ViewChild('audioRef') audioRef!: ElementRef;

  isPlaying = signal(true);
  currentSong = signal(null);

  ngAfterViewInit(): void {
    this.audioRef.nativeElement.src = '/music/1/02.mp3';
  }

  changeStatePlayer() {
    this.isPlaying.set(!this.isPlaying());

    if (this.isPlaying()) {
      this.audioRef.nativeElement.pause();
    } else {
      this.audioRef.nativeElement.play();
      // this.audioRef.nativeElement.volume = 0.1;
    }
  }
}
