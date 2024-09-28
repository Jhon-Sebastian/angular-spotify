import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { HomeSvgComponent } from '@icons/home.svg.component';
import { SearchSvgComponent } from '@icons/search.svg.component';
import { LibrarySvgComponent } from '@icons/library.svg.component';
import { SideMenuItemComponent } from '../shared/menu-item/side-menu-item.component';
import { SideMenuCardComponent } from '../shared/menu-card/side-menu-card.component';
import { AsideMenuService } from '../service/aside-menu.service';

@Component({
  selector: 'AsideMenu',
  standalone: true,
  imports: [
    SideMenuItemComponent,
    SideMenuCardComponent,
    HomeSvgComponent,
    SearchSvgComponent,
    LibrarySvgComponent,
  ],
  templateUrl: './aside-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuComponent {
  playLists = signal(inject(AsideMenuService).getNormalList);
}
