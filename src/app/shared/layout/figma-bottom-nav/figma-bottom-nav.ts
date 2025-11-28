import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'figma-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './figma-bottom-nav.html',
  styleUrls: ['./figma-bottom-nav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FigmaBottomNav {
  externalLegalMode: boolean = false;
  private lastUrl: string = '';

  constructor(private router: Router) {
    this.initRouteWatcher();
}

private initRouteWatcher(): void {
  this.router.events
  .pipe(filter((event) => event instanceof NavigationEnd))
  .subscribe((event) => {
    const nav = event as NavigationEnd;
    const current = nav.urlAfterRedirects.split('?')[0];
    this.externalLegalMode = this.isExternalLegalView(current, this.lastUrl);
    this.lastUrl = current;
  });
}

private isExternalLegalView(current: string, previous: string): boolean {
  if (!this.isLegalPath(current)) return false;
    if (!previous) return true;
    return previous.startsWith('/login') || previous.startsWith('/sign-up');
  }
  private isLegalPath(url: string): boolean {
    return url.startsWith('/privacy-policy') || url.startsWith('/legal-notice');
  }
}