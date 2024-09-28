import { AsideMenuService } from '@/app/components/aside-menu/service/aside-menu.service';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PlayListItemCardComponent } from '@main-contain/playlist-item-card/play-list-item-card.component';
import { GreetingsComponent } from "../greetings/greetings.component";

@Component({
  selector: 'MainContent',
  standalone: true,
  imports: [PlayListItemCardComponent, GreetingsComponent],
  templateUrl: './main-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {
  playLists = signal(inject(AsideMenuService).getNormalList);
}
