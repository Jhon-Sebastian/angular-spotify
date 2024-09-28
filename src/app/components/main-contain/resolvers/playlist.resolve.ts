import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { AsideMenuService } from "@aside-menu/aside-menu.service";

export const playListResolve = (route: ActivatedRouteSnapshot) => {
  const playListId = route.paramMap.get('id');
  if (!playListId) {
    return undefined;
  }

  const playList = inject(AsideMenuService).getPlayListById(playListId);
  if (!playList) {
    const router = inject(Router);
    return router.navigate(['/']);
  }

  return playList
}
